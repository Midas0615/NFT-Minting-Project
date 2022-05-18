import React from "react";
import "./App.css";
import Header from "sections/Header";
import Banner from "sections/Banner";
import Collection from "sections/Collection";
import About from "sections/About";
import RoadMap from "sections/RoadMap";
import Faqs from "sections/Faqs";
import Footer from "sections/Footer";
import { ToastContainer, toast } from "react-toastify";
import Web3 from "web3";
import swal from "sweetalert";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { contractAbi, contractAddress } from "./config";

const App = ({}) => {
  const [chainId, setChainId] = useState(null);
  const [method, setMethod] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);

  useEffect(() => {
    account && method && fireToast();
  }, [method]);

  useEffect(async () => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        loadBlockchainData();
        getCurrentAddressConnected();
        addAccountsAndChainListener();
      } catch (error) {
        console.error(error);
      }
    } else {
      swal(
        "",
        "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
        "error"
      );
    }
  }
  const loadBlockchainData = async () => {
    const contract = new window.web3.eth.Contract(contractAbi, contractAddress);
    setContract(contract);
    const chainId = await window.web3.eth.getChainId();
    setChainId(chainId);
    {
      chainId === 1 ? setMethod("success") : setMethod("error");
    }
    // method && fireToast()

    if (chainId === 1) {
      const totalSupply = await contract.methods.totalSupply().call();
      setTotalSupply(totalSupply);

      const price = await contract.methods.price().call();
      setPrice(price);
      const displayPrice = window.web3.utils.fromWei(price, "ether");
      setDisplayPrice(displayPrice);

      //event will be fired by the smart contract when a new Kandi Kid is minted
      contract.events
        .KandiKidsMinted()
        .on("data", async function (result) {
          setTotalSupply(result.returnValues[0]);
        })
        .on("error", console.error);
    }
  };

  const getCurrentAddressConnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addAccountsAndChainListener = async () => {
    //this event will be emitted when the currently connected chain changes.
    window.ethereum.on("chainChanged", (_chainId) => {
      window.location.reload();
    });

    // this event will be emitted whenever the user's exposed account address changes.
    window.ethereum.on("accountsChanged", (accounts) => {
      window.location.reload();
    });
  };

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        method && fireToast();
      } catch (error) {
        if (error.code === 4001) {
          swal("Request to access account denied!", "", "error");
        }
      }
    }
  };

  async function mint(mintCount) {
    if (contract) {
      if (chainId === 1) {
        if (mintCount === 0) {
          swal("Minimum mint amount is 1 Kandi Kid", "", "info");
        } else {
          try {
            const finalPrice = Number(price) * mintCount;
            await contract.methods
              .mintKandiKids(mintCount)
              .send({ from: account, value: finalPrice });
          } catch (error) {
            if (error.code === 4001) {
              swal("Transaction Rejected!", "", "error");
            } else {
              swal("Transaction Failed!", "", "error");
            }
          }
        }
      } else {
        swal("Please switch to mainnet to mint Kandi Kid", "", "error");
      }
    } else {
      swal(
        "",
        "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
        "error"
      );
    }
  }
  const fireToast = () => {
    toast[method](
      `You are ${method === "error" ? "not" : ""} connected to mainnet`,
      {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: true,
      }
    );
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <Banner
        account={account}
        connectMetaMask={connectMetaMask}
        totalSupply={totalSupply}
        price={displayPrice}
        mint={mint}
      />
      <Collection />
      <About />
      <RoadMap />
      <Faqs />
      <Footer />
    </>
  );
};

export default App;
