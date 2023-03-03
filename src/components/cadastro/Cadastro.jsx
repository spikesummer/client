import React, { useContext } from "react";
import { Container, FormCad } from "./CadastroStyle";
import { openContext } from "../../contexts/openContext";
import axios from "axios";

export const Cadastro = () => {
    const {isOpen, setIsOpen, setDados} = useContext(openContext);
    const url = "http://localhost:3000";

    const atualizarDataList = ()=>{
        axios.get(url)
           .then(res=>setDados(res.data))
           .catch(error => console.log(error))
    }

    const cadastrar = (nome, idade, sexo)=>{
        axios.post(url, {
            nome: nome,
            idade: idade,
            sexo: sexo
          })
          .then( response=> {
            alert(JSON.stringify(response.data));
            atualizarDataList();
          })
          .catch(function (error) {
            console.error(error);
          });
        cancelar();
    }

    const cancelar = ()=>{
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("masculino").checked = false;
        document.getElementById("feminino").checked = false;
        setIsOpen();
    }

    return (
        <Container style={{display:isOpen?"flex":"none"}}>
            <FormCad onSubmit={(e)=>{e.preventDefault(); cadastrar(e.target[0].value, e.target[1].value, e.target["sexo"].value)}}>
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" id="nome" required/>

                <label htmlFor="">Idade:</label>
                <input type="number" name="idade" id="idade" required/>

                <fieldset>
                    <legend>Sexo:</legend>
                    <input type="radio" name="sexo" id="masculino" value="masculino"/>
                    <label htmlFor="masculino">Masculino</label>

                    <input type="radio" name="sexo" id="feminino" value="feminino"/>
                    <label htmlFor="feminino">Feminino</label>
                </fieldset>
                <div>
                    <button type="submit">Salvar</button>
                    <button onClick={(e)=>{e.preventDefault();cancelar()}}>Cancelar</button>
                </div>

            </FormCad>
        </Container>
    )};