import { ApolloProvider } from "@apollo/client";
import apolloClient from "../src/apollo/config";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../src/config/emotions";
import { CacheProvider } from "@emotion/react";
import theme from "../src/config/theme";
import "../styles/globals.scss";
const clientSideEmotionCache = createEmotionCache();
import useNetworkStatus from "../src/utils/useNetworkStatus";
import { SessionProvider } from "next-auth/react";
import ApplayoutComponent from "../src/components/Layouts/DefaultLayout";

function MyApp(props) {
  const { networkStatus } = useNetworkStatus();
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    session,
  } = props;
  const appProps = {
    ...pageProps,
    networkStatus,
  };
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Style Club</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ApolloProvider client={apolloClient}>
            <ApplayoutComponent>
              <Component {...appProps} />
            </ApplayoutComponent>
          </ApolloProvider>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

export default MyApp;
