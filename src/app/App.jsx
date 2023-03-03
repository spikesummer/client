import React from "react";
import { GlobalStyle } from "../globalStyled";
import { Header } from "../components/header/Header";
import { Menu } from "../components/menu/Menu";
import { DataList } from "../components/datalist/DataList";
import { Cadastro } from "../components/cadastro/Cadastro";
import { GlobalContext } from "../contexts/openContext";
import { Editar } from "../components/editar/Editar";


export const App = () => {
   
    return(
        <>
            <GlobalContext>
                <GlobalStyle />
                <Header/>
                <Menu/>
                <DataList/>
                <Cadastro/>
                <Editar />
            </GlobalContext>
        </>
    )
}