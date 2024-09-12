import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App(){
  return (
    <div>
        <h1>Usuário do Github</h1>
        <Cabecalho/>
        <Outlet/>
        <Rodape/>
    </div>
  );
}