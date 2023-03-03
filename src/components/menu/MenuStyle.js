import styled from 'styled-components';
const primary = "rgba(32, 34, 43, 1);"
// const secundary = "rgba(39, 42, 53, 1);"
// const letter = "rgba(62, 62, 62, 1);"
const verde = "#00A84F";

export const Container = styled.div`
    background-color: ${primary};
    display: flex;
    height: 5rem;
    width: 100%;
    align-items: center;
    padding: 0 2rem;
    justify-content: space-evenly;

    button{
        padding: 0.5rem;
        min-width: 180px;
        margin-right: 2rem;
        height: 2.8rem;
        justify-content: center;
        border: none;
        border-radius: 0.4rem;
        align-items: center;
        display: flex;
        font-size: 1rem;
        cursor: pointer;
        background-color: ${verde};
        font-weight: bolder;
        color: ${primary};
        transition: 0.3s ease-in-out;
        :hover{
            background-color: rgba(0, 168, 79, 0.7);
        }
    }

    & svg{
        font-size: 1.2rem;
        margin-right: 0.4rem;
    }

    & .search{
       
        border: 2px solid ${verde};
        height: 2.7rem;
        border-radius: 0.4rem;
        overflow: hidden;
        display: flex;
        flex: 1 1 600px;
        align-items: center;
        max-width: 600px;
        min-width: 400px;

        svg{
            font-size: 1.5rem;
            padding: 0 10px;
            margin: 0;
            height: 100%;
            width: 3rem;
            color: ${primary};
            background-color: ${verde};
        }

        input{
            height: 100%;
            padding: 0 0.5rem;
            background-color: rgba(255,255,255, 0.08);
            width: 100%;
            outline: none;
            letter-spacing: 2px;
            border: none;
            font-size: 1rem;
            color: rgba(255,255,255, 0.5);
            
            :focus{
                box-shadow: inset 0 0 5px rgba(0, 168, 79, 0.7),inset 0 0 12px rgba(0, 168, 79, 0.5) ;
                
            } 
            ::placeholder{
                font-style: italic;
                letter-spacing:  0.1rem;
            }
        }
    }
`;


