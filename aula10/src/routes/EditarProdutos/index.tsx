import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TipoProduto } from "../../types";

export default function EditarProdutos(){

    const {id} = useParams();

    //Recuperando a lista do localStorage
    const listaDeProdutosString = localStorage.getItem('lista') || '[]';
    const lista:TipoProduto[] = JSON.parse(listaDeProdutosString);

    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: '',
        preco: 0.0,
    });

    useEffect(() => {
      const produtoEncontrado = lista.find(p => p.id === Number(id));
      if(produtoEncontrado)
        setProduto(produtoEncontrado);

    }, [])
    
    return (
        <div>
            <h1>Editar Produtos</h1>
            <div>
                <p>Parâmetro que veio do componente produto! : {id}</p>
                <p>Nome: {produto.nome}</p>
            </div>
        </div>
    );
}