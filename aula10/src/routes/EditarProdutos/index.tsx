import { useParams } from "react-router-dom";

export default function EditarProduto(){

    const {id} = useParams();

    return (
        <div>
            <h1>Editar Produto</h1>
            <div>
                <p>Parametro que veio do componente produto: {id}</p>
            </div>
        </div>
    );
}