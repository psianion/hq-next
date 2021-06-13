import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  primary0: "#222629",
  primary1: "#474b4f",
  primary2: "#6b6e70",
  secondary0: "#efefef",
  secondary1: "#e0e0e0",
  secondary2: "#d4d4d4",
  highlight0: "#86c232",
};

export const lightTheme = {
  primary0: "#efefef",
  primary1: "#e0e0e0",
  primary2: "#d4d4d4",
  secondary0: "#222629",
  secondary1: "#474b4f",
  secondary2: "#6b6e70",
  highlight0: "#86c232",
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
  width: 10px;
  }

  ::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.primary1};
  }

  ::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.secondary2};
  border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.secondary1};
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
`;
