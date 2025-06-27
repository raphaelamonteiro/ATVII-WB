interface ProdutoFormData {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
}

interface ProdutoListaProps {
    produtos: ProdutoFormData[];
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
}

const ProdutoLista: React.FC<ProdutoListaProps> = ({ produtos, onEdit, onDelete }) => {
    return (
        <ul>
            {produtos.map((produto, idx) => (
                <li key={produto.id}>
                    <strong>{produto.nome}</strong><br />
                    Preço: R$ {produto.preco}<br />
                    {produto.descricao}<br />
                    <button onClick={() => onEdit(idx)}>Editar</button>
                    <button onClick={() => onDelete(idx)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
};

export default ProdutoLista;
