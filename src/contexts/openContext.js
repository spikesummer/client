import React, { useState, createContext } from "react";
import axios from "axios";

export const openContext = createContext();

export const GlobalContext = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEditar, setIsOpenEditar] = useState(false);  
    const [dados, setDados] = useState();
    
    const url = "http://localhost:3000";
    
    if(dados=== undefined){
        axios.get(url)
           .then(res=>setDados(res.data))
           .catch(error => console.log(error))
    }

    return (
        <openContext.Provider value={{ isOpen, setIsOpen, isOpenEditar, setIsOpenEditar, dados, setDados }}>
            {children}
        </openContext.Provider>
    )
}