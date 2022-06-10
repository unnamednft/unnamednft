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

  async function getNumberMinted() {
    const ABI = [
      {
        inputs: [],
        name: "nftCount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ];

    const nftCountOptions = {
      chain: "avalanche",
      address: "0x0c6945e825fc3c80f0a1ea1d3e24d6854f7460d8",
      function_name: "nftCount",
      abi: ABI,
      params: {},
    };
    const nftsMinted = await Moralis.Web3API.native.runContractFunction(
      nftCountOptions
    );
    setSpotsMinted(nftsMinted);
  }

  //Minting: cleanup. try to use one function with inputs from buttons changing number of mints and value vs multiple functions
  async function mint1Nft() {
    let options = {
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
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
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
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
      contractAddress: "0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8",
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
      <div className="w-full rounded overflow-hidden shadow-lg bg-lime-400 hover: hover:scale-105 hover:bg-yellow-300 duration-300">
        <div className="flex place-content-center"><img className="w-100 py-8" src={image} alt=""></img></div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1>FREE MINT!! MAX 10</h1>
          </div>
          <div className="font-bold text-xl mb-2 flex justify-center">
            <h1>REVEAL AFTER MINT</h1>
          </div>

          <div className="text-slate-50 text-base">
            <div className="flex flex-col grid gap-4 grid-cols-3 px-4 py-4 place-contents-center">
              <button
                className="align-middle rounded-lg sm:px-4 md:px-4 lg:px-2 xl:px-4 px-4 py-2 border-4 border-gray-900 text-gray-900 
      hover:bg-lime-400 hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
                onClick={mint1Nft}
              >
                1
              </button>
              <button
                className="align-middle rounded-lg sm:px-4 md:px-4 lg:px-2 xl:px-4 px-4 py-2 border-4 border-gray-900 text-gray-900 
      hover:bg-lime-400 hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
                onClick={mint5Nft}
              >
                5
              </button>
              <button
                className="align-middle rounded-lg sm:px-4 md:px-4 lg:px-2 xl:px-4 px-4 py-2 border-4 border-gray-900 text-gray-900 
      hover:bg-lime-400 hover:text-black duration-300 hover:border-white font-mono text-l flex justify-center"
                onClick={mint10Nft}
              >
                10
              </button>
        
            </div>
       
          
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default NftCollection;
