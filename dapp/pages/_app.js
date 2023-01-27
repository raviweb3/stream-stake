import "../styles/globals.css";
import { Layout } from "../components/Layout";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const hyperspaceTestnet = {
  /** ID in number form */
  id: 3141,
  /** Human-readable name */
  name: "Filecoin - Hyperspace testnet",
  /** Internal network name */
  network: "wallabytestnet",
  /** Currency used by chain */
  nativeCurrency: { name: "tFIL", symbol: "FIL", decimals: 18 },
  /** Collection of RPC endpoints */
  rpcUrls: {
    default: "https://api.hyperspace.node.glif.io/rpc/v1",
  },
  blockExplorers: {
    default: "https://hyperspace.filfox.info/en",
  },
  testnet: true,
};

function MyApp({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [hyperspaceTestnet],
    [
      jsonRpcProvider({
        rpc: (chain) => ({
          http: `https://api.hyperspace.node.glif.io/rpc/v1`,
        }),
      }),
    ]
  );
  const { connectors } = getDefaultWallets({
    appName: "StreamStake",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
