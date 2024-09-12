export default function Produtos(){

    const listaDeProdutos = [
        {id: 1, nome: 'Camiseta', preco: 19.99},
        {id: 2, nome: 'Calça', preco: 39.99},
        {id: 3, nome: 'Tênis', preco: 99.99}
    ];

    return (
        <div>
            <h1>Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDeProdutos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td><button>Editar</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total: R$ {listaDeProdutos.reduce((ac, p) => ac + p.preco, 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}