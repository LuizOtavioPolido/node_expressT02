import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import ListagemTarefa from './paginas/ListagemTarefa/ListagemTarefa'
import Tarefa from './paginas/Tarefa/Tarefa'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/listagemTarefas' element={<ListagemTarefa />}/>
        <Route path='/tarefa' element={<Tarefa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
