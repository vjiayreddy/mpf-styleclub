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
import AppLayoutComponent from "../src/components/Layouts/DefaultLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from "lodash";
// Apollo
import apolloClient from "../src/apollo/config";
import { ApolloProvider } from "@apollo/client";
import { GET_ALL_OCCASIONS } from "../src/apollo/queries";
import { useEffect } from "react";
import ToasterMessage from "../src/components/UiLibrary/Notifications/ToasterMessage";

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

  useEffect(() => {
    if (networkStatus === false) {
      alert("Network offline");
    } else if (networkStatus === true) {
      alert("Network online");
    }
  }, [networkStatus]);

  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Style Club</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToasterMessage />
          <ApolloProvider client={apolloClient}>
            <AppLayoutComponent navMenus={props.navMenu}>
              <Component {...appProps} />
            </AppLayoutComponent>
          </ApolloProvider>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async () => {
  try {
    const { data } = await apolloClient.query({
      query: GET_ALL_OCCASIONS,
    });
    return {
      navMenu: data?.getAllOccasions ? data?.getAllOccasions : [],
    };
  } catch (error) {
    return {
      navMenu: [],
    };
  }
};

export default MyApp;
