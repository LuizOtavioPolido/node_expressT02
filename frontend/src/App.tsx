import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import ListagemTarefa from './paginas/ListagemTarefa/ListagemTarefa'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/listagemTarefas' element={<ListagemTarefa />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
