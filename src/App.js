import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./Page/Homepage";
import Banner from "./Page/Banner";
import Benefits from "./Page/Benefits";
import Tokenomic from "./Page/Tokenomics";
import BasicExample from "./Page/Roadmap";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import PreSale from "./Page/PreSale";

const chains = [arbitrum, mainnet, polygon];
const projectId = "75860bc759f81441a459f0385ae30617";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <>
      <Header />;
      <Homepage />
      <Banner />
      <Benefits></Benefits>
      <Tokenomic></Tokenomic>
      <WagmiConfig config={wagmiConfig}>
        <PreSale />
      </WagmiConfig>
      <Footer />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </>
  );
}

export default App;
