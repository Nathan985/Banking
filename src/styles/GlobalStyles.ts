import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root, #app {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
        font-size: 1rem;
        background-color: var(--primary);
        font-family: 'Roboto', sans-serif;
        color: var(--white);
    }
    @media(max-width: 1080px){
    html {
      font-size: 93.75%;
      }
    }
    @media(max-width: 720px){
      html {
        font-size: 87.5%;
      }
    } 

    :root{
      --primary: #181818;
      --black: #000000;
      --light: #ECECEC;
      --danger: #EB5757;
      --brown: #EBE96E;
      --blue: #3FA9EB;
      --white: #FFFFFF;
    }

`;