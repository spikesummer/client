import styled from 'styled-components';
const primary = "rgba(32, 34, 43, 1);"
// const secundary = "rgba(39, 42, 53, 1);"
// const letter = "rgba(62, 62, 62, 1);"

export const Container = styled.div`
    background-color: ${primary};
    display: flex;
    height: 5rem;
    width: 100%;
    align-items: center;
    padding: 0 2rem;
    & h1{
        color: #4672A1;
        user-select: none;
    }
`;

