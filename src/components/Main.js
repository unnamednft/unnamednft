import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import image from "../images/1.png";

const NftCollection = () => {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const [spotsMinted, setSpotsMinted] = useState([]);
  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };



  //Minting: cleanup. try to use one function with inputs from buttons changing number of mints and value vs multiple functions
  async function mint1Nft() {
    let options = {
      contractAddress: "0x6BDAd2A83a8e70F459786a96a0a9159574685c0e",
      functionName: "mintNFT",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "mintNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(0),
      params: {
        tokenAmount: 1,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }

  async function mint5Nft() {
    let options = {
      contractAddress: "0x6BDAd2A83a8e70F459786a96a0a9159574685c0e",
      functionName: "mintNFT",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "mintNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(0),
      params: {
        tokenAmount: 5,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }



  async function mint10Nft() {
    let options = {
      contractAddress: "0x6BDAd2A83a8e70F459786a96a0a9159574685c0e",
      functionName: "mintNFT",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "tokenAmount", type: "uint256" },
          ],
          name: "mintNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(0),
      params: {
        tokenAmount: 10,
      },
    };

    await contractProcessor.fetch({
      params: options,
    });
  }





  return (
    <div className="p-10 flex-none gap-10 font-mono text-gray-900 bg-pink-500">
      <div className="w-full rounded overflow-hidden shadow-lg bg-lime-400 hover: hover:scale-105 hover:bg-bright-yellow duration-300">
        <div className="flex place-content-center"><img className="w-100 py-8" src={image} alt=""></img></div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1>MINT COMPLETE!!</h1>
          </div>
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1></h1>
          </div>

          
        </div>
      </div>

      
    </div>
  );
};

export default NftCollection;
