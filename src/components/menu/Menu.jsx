import React, { useContext } from "react";
import { openContext } from "../../contexts/openContext";
import { Container } from "./MenuStyle";
import { FaPlus, FaSearch } from 'react-icons/fa';
import axios from "axios";

export const Menu = () => {
    const { isOpen, setIsOpen, setDados } = useContext(openContext);

    const openModal = () => {
        setIsOpen(!isOpen);
    }

    //==========
    const url = "http://localhost:3000"

    const getUser = nome => {

        if(nome!== ""){
           axios.get(`${url}/nome/${nome}`)
            .then( res => setDados(res.data))
            .catch(error => console.log(error))
        }else{
            axios.get(url)
           .then(res=>setDados(res.data))
           .catch(error => console.log(error))
        }
    }

    //==============
    return (
        <Container>
            <button onClick={openModal}>
                <FaPlus />
                <span>Novo Cadastro</span>
            </button>
            <div className="search">
                <FaSearch />
                <input type="search" name="" id="" placeholder="pesquisar..." onChange={(e) => getUser(e.target.value)} />
            </div>
        </Container>
    )
}