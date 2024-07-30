import  {ethers}  from "ethers";
import { useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton";

export default function Login() {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [isConnected, setIsConnected] = useState(false)
    const [account, setAccount] = useState()
    async function connect() {
     // @ts-ignore
      if(window.ethereum) {
        try {
            // @ts-ignore
         const provider = new ethers.providers.Web3Provider(window.ethereum)  // why this 
         setProvider(provider) 
         await provider.send("eth_requestAccounts", []);
         const signer = provider.getSigner();
         const address = await signer.getAddress();
         setIsConnected(true);
         console.log("MetaMask Connected:",
          address
         );
        } catch(e: any) {
          console.log(e);
        }
      } else {
        console.log(
          "MetaMask not detected"
        ); 
      }
    }
  
    return <div className="pt-20">
        <div className="flex justify-center">
            <div className="welcome text-3xl max-w-3xl">
                Welcome to Decentralized voting application
            </div>
        </div>
        <div className="flex justify-center">
            <div className="max-w--2xl pt-10">
                <PrimaryButton onClick={connect}> Connect your metamask</PrimaryButton>
            </div>
        </div>
    </div>
}