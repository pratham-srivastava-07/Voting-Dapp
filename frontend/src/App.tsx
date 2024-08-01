import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import Connected from './components/Connected';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, contractAbi } from './constants';

function App() {

  const [connected, setConnected] = useState(false)
  const [account, setAccount] = useState('');
  const [candidates, setCandidates] = useState()
  const handleConnect = (account: string) => {
    setAccount(account);
    setConnected(true)
  }

  useEffect(()=> {
    if(window.ethereum) {
      window.ethereum.on('accountsChanged', handleChange)
    }

    return () => {
      window.ethereum.removeListener('accountsChanged', handleChange)
    }
  })


  const handleChange = (accounts: any) => {
    if(accounts.length > 0 && accounts != account[0]) {
      setAccount(accounts[0]);
    }
    else {
      setConnected(false);
      setAccount('')
    }
  }

  async function getStatusOfCandidates() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contractInstance = await new ethers.Contract(
          CONTRACT_ADDRESS, contractAbi, signer
        )
        const candidates = await contractInstance.getAllCandidates();
        setCandidates(candidates);
  }


  async function voteSingleCandidate(candidateName: any) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = await new ethers.Contract(
      CONTRACT_ADDRESS, contractAbi, signer
    )
    try {
      const tx = await contractInstance.voteCandidates(candidateName);
      await tx.wait() // waits for the  tx to be mined
    }
    catch(e) {
      console.log("error", e);
    }
  }
  
  async function getVotes(candidateName: any) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = await new ethers.Contract(
      CONTRACT_ADDRESS, contractAbi, signer
    )
    try {
      const tx = contractInstance.getVotesOfCandidates(candidateName);
      await tx.wait()
    } catch(err) {
      console.log(err);
      
    }
  }

  async function getCandidates() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = await new ethers.Contract(
      CONTRACT_ADDRESS, contractAbi, signer
    )
    try {
      const tx = contractInstance.getAllCandidates();
      await tx.wait();
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
    <div className="pt-24">
    {connected ? (
      <Connected account={account} />
      ) : (
      <Login onConnect={handleConnect}/>
      )
    }
    </div>
    </>
  )
}

export default App
