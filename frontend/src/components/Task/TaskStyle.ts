import styled from "styled-components";
import { ListagemTarefaStyled } from "../../paginas/ListagemTarefa/ListagemTarefaStyle";

const Container = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* justify-content: ; */
`

const Content = styled.div`
    background-color: #71C0BB;
    width: 90%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const RemoveButton = styled(ListagemTarefaStyled.AddButton)`
    background-color: #CB0404;
`

export const TaskStyled = {
    Container,
    Content,
    RemoveButton
}