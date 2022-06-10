import React from "react";
import { useMoralis } from "react-moralis";
import image from "../images/1.png";

export default function Authenticate() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-neutral-800 flex w-full h-screen align-middle flex">
      <div className="m-auto">
        <img
          src={image}
          className="shadow rounded h-auto align-middle border-none"
          alt=""
        ></img>
        <div className="flex justify-center align-middle px-40 py-10">
          <button
            className="align-middle rounded-full px-4 py-2 border-4 border-lime-400 text-lime-400 
    hover:bg-lime-400 hover:text-black duration-300 hover:border-white font-mono text-l"
            onClick={() =>
              authenticate({ signingMessage: "Sign in!" })
            }
          >
            <b>Authenticate</b>
          </button>
        </div>
      </div>
    </div>
  );
}
