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

// Apollo
import apolloClient from "../src/apollo/config";
import { ApolloProvider } from "@apollo/client";
import { GET_ALL_OCCASIONS } from "../src/apollo/gqlQueries/menus";



function MyApp(props) {
  console.log(props);
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
            <ApplayoutComponent navMenus={props.navMenu}>
              <Component {...appProps} />
            </ApplayoutComponent>
          </ApolloProvider>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}



MyApp.getInitialProps = async (context) => {
  try {
    const { data } = await apolloClient.query({
      query: GET_ALL_OCCASIONS
    })
    return {
      navMenu: data?.getAllOccasions ? data?.getAllOccasions : []
    }
  }
  catch (error) {
    return {
      navMenu: []
    }
  }
}

export default MyApp;
