import React, { useContext } from "react";
import { Container, DataHead, DataItem, DataRow, DataRows } from "./DataListStyle";
import { FaTrash, FaPenAlt } from 'react-icons/fa';
import { openContext } from "../../contexts/openContext";

export const DataList = () => {
    
    const {dados, isOpenEditar, setIsOpenEditar} = useContext(openContext);

    return (
        <Container>
            <DataHead>
                <DataItem>Id</DataItem>
                <DataItem>Nome</DataItem>
                <DataItem>Idade</DataItem>
                <DataItem>Sexo</DataItem>
                <DataItem>Ações</DataItem>
            </DataHead>
            <DataRows>
           
            {dados==="Usuário não encontrado!"?<span>Usuário não encontrado!</span>:dados?.map(
            (dado, index)=>{
                return(
                    <DataRow key={index}>
                        
                        <DataItem>{dado.id}</DataItem>
                        <DataItem>{dado.nome}</DataItem>
                        <DataItem>{dado.idade}</DataItem>
                        <DataItem>{dado.sexo}</DataItem>
                        <DataItem>
                            <button  id={index} onClick={()=>{setIsOpenEditar(!isOpenEditar)}}>
                                <FaPenAlt className="icon"/>
                                <span>Editar</span>
                            </button>
                            <button onClick={(e)=>{console.log(index)}}>
                                <FaTrash className="icon"/>
                                <span>Apagar</span>
                            </button>
                        </DataItem>
                    </DataRow>
                )
            }
        )}
            </DataRows>
        </Container>
    )
}