import React, { useContext } from "react";
import { Container, FormCad } from "./EditarStyle";
import { openContext } from "../../contexts/openContext";
import axios from "axios";

export const Editar = () => {
    const {isOpenEditar, setIsOpenEditar, setDados} = useContext(openContext);
    const url = "http://localhost:3000";

    const editar = (id, nome, idade, sexo)=>{
        
        axios.put(url, {
            id: id,
            nome: nome,
            idade: idade,
            sexo: sexo
          })
          .then( response=> {
            alert(JSON.stringify(response.data));
            setDados(response.data)
          })
          .catch(function (error) {
            console.error(error);
          });
        cancelar();
    }

    const cancelar = ()=>{
        document.getElementById("nomeEditar").value = "";
        document.getElementById("idadeEditar").value = "";
        document.getElementById("masculinoEditar").checked = false;
        document.getElementById("femininoEditar").checked = false;
        setIsOpenEditar(!isOpenEditar);
    }

    return (
        <Container style={{display:isOpenEditar?"flex":"none"}}>
            <FormCad onSubmit={(e)=>{e.preventDefault(); editar(e.target[0].value, e.target[1].value, e.target["sexo"].value)}}>
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" id="nomeEditar" />

                <label htmlFor="">Idade:</label>
                <input type="number" name="idade" id="idadeEditar" />

                <fieldset>
                    <legend>Sexo:</legend>
                    <input type="radio" name="sexo" id="masculinoEditar" value="masculino"/>
                    <label htmlFor="masculino">Masculino</label>

                    <input type="radio" name="sexo" id="femininoEditar" value="feminino"/>
                    <label htmlFor="feminino">Feminino</label>
                </fieldset>
                <div>
                    <button type="submit">Atualizar</button>
                    <button onClick={(e)=>{e.preventDefault();cancelar()}}>Cancelar</button>
                </div>

            </FormCad>
        </Container>
    )};