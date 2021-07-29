import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../src/config/ThemeConfig";
import Navbar from "../src/components/Navbar";
import axios from "axios";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
axios.defaults.baseURL = process.env.API_URL;

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const queryClient = new QueryClient();
  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>PvP HQ</title>
          <link rel="icon" type="image/png" href="/logo/icon.png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Component theme={theme} {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
