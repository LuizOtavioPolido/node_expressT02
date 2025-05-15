import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Card = styled.div`
    height: 50%;
    width: 40%;
    background-color: #f00;
    display: flex;
    flex-direction: column;
`

const AddButtonContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    background-color: blue;
`

const ListContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: green;
`

export const ListagemTarefaStyled = {
    Container,
    Card,
    AddButtonContainer,
    ListContainer
}