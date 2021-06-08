import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  primary0: "#F7F7F8",
  primary1: "#EAEAEC",
  primary2: "#D8D8D8",
  secondary2: "#464649",
  secondary1: "#29292C",
  secondary0: "#18181B",
  highlight0: "#772CE8",
  highlight1: "#9147FF",
  highlight2: "#A970FF",
  success: "#29CC74",
  danger: "#E91916",
};

export const darkTheme = {
  secondary0: "#F7F7F8",
  secondary1: "#EAEAEC",
  secondary2: "#D8D8D8",
  primary2: "#464649",
  primary1: "#29292C",
  primary0: "#18181B",
  highlight0: "#772CE8",
  highlight1: "#9147FF",
  highlight2: "#A970FF",
  success: "#29CC74",
  danger: "#E91916",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary1};
    color: ${({ theme }) => theme.secondary1};
    transition: all 0.30s ease-in;
    font-size: 62.5%; 
    overflow-x: hidden;
    // font-family: 'Roboto', sans-serif;
    // font-family: 'Open Sans', sans-serif;
    font-family: 'Poppins', sans-serif;

  
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
