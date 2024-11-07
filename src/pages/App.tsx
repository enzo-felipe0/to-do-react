import { Formulario } from "../components/Formulario/Formulario"
import { Lista } from "../components/Lista/Lista"
import '../index.css'
import style from './App.module.scss' 

function App() {
  return (
    <>
      <div className={style.AppStyle}>
        <Formulario />
        <Lista />
      </div>
    </>
  )
}

export default App
