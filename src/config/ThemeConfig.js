import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  primary0: "#222629",
  primary1: "#303438",
  primary2: "#474b4f",
  secondary0: "#efefef",
  secondary1: "#e0e0e0",
  secondary2: "#c0c0c0",
  highlight0: "#9147FF",
  logo: "/logo/hqlogo_white.png",
  logohq: "/logo/hqlogo.png",
};

export const lightTheme = {
  primary0: "#efefef",
  primary1: "#e0e0e0",
  primary2: "#c0c0c0",
  secondary0: "#222629",
  secondary1: "#303438",
  secondary2: "#474b4f",
  highlight0: "#9147FF",
  logo: "/logo/hqlogo_black.png",
  logohq: "/logo/hqlogob.png",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary0};
    color: ${({ theme }) => theme.secondary1};
    transition: all 0.30s ease-in;
    font-size: 62.5%; 
    overflow-x: hidden;
    // font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
    // font-family: 'Poppins', sans-serif;
  }

  ::-webkit-scrollbar {
  width: 5px;
  }

  ::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.primary0};
  }

  ::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.primary2};
  border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.primary1};
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }

  li {
    list-style: none;
  }

  a:link, a:visited, a:hover, a:active    {
  text-decoration: none;
  color: ${({ theme }) => theme.highlight0};
  }

  @font-face {
    font-family: "Prototype";
    src: url("/fonts/Prototype.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Aaargh";
    src: url("/fonts/Aaargh.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;
