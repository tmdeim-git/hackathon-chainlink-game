import { ConnectButton, useActiveWallet } from "thirdweb/react";
import { authWalletAtom, client, wallets } from "../provider";
import { sepolia } from "thirdweb/chains";
import { startEvent } from "../events";
import { useSetAtom } from "jotai";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function Connect() {
  const setConnectedWallet = useSetAtom(authWalletAtom);
  const wallet = useActiveWallet();
  console.log("render")
  const navigate = useNavigate();
  useEffect(() => {
    if (!wallet) {
      navigate('/login');
    }
  }, [wallet]);
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectButton={{ label: "Play" }}
      onConnect={async (wallet) => {
        console.log("123")
        setConnectedWallet(wallet);
        startEvent();
        wallet.switchChain(sepolia);
        navigate("/game");
        console.log("TODO: Redirect to game...");
      }}
    />
  );
}

export default Connect;
