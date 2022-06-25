import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../src/config/ThemeConfig";
import Navbar from "../src/components/Navbar";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

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
          <meta
            name="description"
            content="India's largest Pokémon PvP community"
          />
          <meta
            name="keywords"
            content="Pokémon, Pokemon, Pokémon GO, Pokemon GO, Pokémon GO PvP, Pokémon GO India, Pokémon Unite, Pokémon Unite India, Pokémon Esports"
          />
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
