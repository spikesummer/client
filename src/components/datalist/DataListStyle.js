import styled from 'styled-components';

const primary = "rgba(32, 34, 43, 1);"
const letter = "rgba(62, 62, 62, 1);"
const diviser = "rgba(62, 62, 62, 0.5);"
const blueColor = "rgba(0,116,246, 1);"
const dangerColor = "rgba(235, 37, 72, 1);"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(39, 42, 53, 0.09);
    padding-top: 5rem;
    width: 100%;
    min-height: calc(100vh - 10rem);
    align-items: center; 
`

export const DataHead = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: flex-start;
    border-top: 2px solid ${letter};
    border-bottom: 2px solid ${letter};
    
    span:first-child{
        min-width: 5rem;
    }
    span:nth-child(2){  
        min-width: 20rem;  
    }
    span:nth-child(3){
        min-width: 5rem;   
    }
    span:nth-child(4){
        min-width: 7rem;  
    }
    span:nth-child(5){
        min-width: 20rem;  
    }
    span{
        font-weight: bolder;
        display: flex;
        padding: 0.5rem;
        color: ${primary};
    }
`;

export const DataRows = styled.div`
    width: 100%;
    max-width: 900px;
`;

export const DataRow = styled.div`
    width: 900px;
    display: flex;
    border-bottom: 2px solid ${diviser};
`;

export const DataItem = styled.span`
    display: flex;
    width: 100%;
    padding: 0.5rem;
    justify-content: flex-start;
    color: ${primary};
    
    :first-child{
        max-width: 5rem;
        overflow: hidden;
    }
    :nth-child(2){
        max-width: 20rem;
    }

    :nth-child(3){
        max-width: 5rem;
    }
    :nth-child(4){
        max-width: 7rem;
    }
    :nth-child(5){
        max-width: 20rem;
    }

    & button{
        margin-right: 1rem;
        padding: 0 0.5rem;
        font-size: 0.8rem;
        align-items: center;
        display: flex;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;

        & .icon{
            margin-right: 0.5rem;
        }
    }

    & button:nth-child(1){
        color: ${blueColor};
        border: 1px solid ${blueColor};
    }

    & button:nth-child(2){
        color: ${dangerColor};
        border: 1px solid ${dangerColor};
    }
`;
