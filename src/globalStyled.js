import { createGlobalStyle } from "styled-components";
// Paleta de cores:
// const lightBlue = "#287094";
// const gray = "#D4D4CE";
// const white = "#F6F6F6";
// const darkBlue = "#023246";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif, monospace;
    }

    body{
        width: 100vw;
    }

    #root{
        
        width: 100vw;
    }
    a{
        text-decoration: none;
        :visited{
            color: #aaa;
        }
    }
`;