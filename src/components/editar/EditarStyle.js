import styled from 'styled-components';
const blueColor = "rgba(0,116,246, 1);"
const dangerColor = "rgba(235, 37, 72, 1);"

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormCad = styled.form`
    background-color: white;
    height: 400px;
    width: 500px;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction:column ;
    justify-content: space-around;

    input[type=number], input[type=text]{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
    }

    legend{
        /* margin-left: 1rem; */
    }
    fieldset{
        padding: 0.5rem 1rem;
    }

    input[type=radio]{
        margin: 0 0.5rem;
    }

    & div{
        display: flex;
        justify-content: end;
        
    }
    div button{
        
        padding: 0 0.5rem;
        font-size: 0.8rem;
        justify-content: center;
        align-items: center;
        height: 1.9rem;
        width: 100px;
        display: flex;
        border: none;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        background-color: red;
        & .icon{
            margin-right: 0.5rem;
        }

        :nth-child(1){
        background-color: ${blueColor};
        margin-right: 1rem;
        }
        :nth-child(2){
        background-color: ${dangerColor};
        }
    }

`;