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
    background-color: #6FE6FC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Input = styled.input`
    height: 25px;
    width: 60%;
`

const Select = styled.select`
    height: 25px;
    width: 60%;
`

const ContinueButton = styled.button`
    background-color: #ACC572;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TarefaStyled = {
    Container,
    Card,
    Input,
    Select,
    ContinueButton
}