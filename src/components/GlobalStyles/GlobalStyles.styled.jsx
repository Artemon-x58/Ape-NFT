import { createGlobalStyle } from "styled-components";
import "../../../public/fonts/BiroScript/stylesheet.css";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import "../../../public/fonts/Right Grotesk/stylesheet.css";

export const GlobalStyles = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: #181818;
    text-transform: uppercase;

   font-family: "RightGrotesk", sans-serif;
   font-size: 12px;
   font-weight: 900;
   line-height: 117%;
   color: #fff;
    
  }

  h1, h3, h4, h5, h6, p {
    margin: 0;
  }

  h2 {
    margin: 0 0 24px 0;

    font-family: "RightGrotesk", sans-serif;
    font-weight: 900;
    font-size: 44px;
    line-height: 91%;
    text-transform: uppercase;
    text-align: center;
    color: #fff;

    @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 80px;
    line-height: 100%;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;

    font-size: 160px;
  }
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
    outline: transparent;
    cursor: pointer;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: transparent;
  }
svg{
  cursor: pointer;
  
}
label {
  cursor: pointer;
}

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

span {
  margin: 0;
}
`;
