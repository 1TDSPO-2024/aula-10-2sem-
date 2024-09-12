import { Outlet } from "react-router-dom";

export default function App(){
  return (
    <div>
        <h1>Usuário do Github</h1>
        <Outlet/>
    </div>
  );
}