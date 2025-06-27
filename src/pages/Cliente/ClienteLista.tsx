import type Cliente from "../../models/Clientes";
//import { clientes, produtosServicos, consumos } from './../../data/dados';


type ClienteProps = {
    clientes: Cliente[];
    excluirCliente: (index: number) => void;
};

export const ClienteLista: React.FC<ClienteProps> = ({ clientes, excluirCliente }) => {
    return (
        <div className="container">
            <h5>Lista de Clientes</h5>
            {clientes.length === 0 ? (
                <p>Nenhum cliente cadastrado.</p>
            ) : (
                <ul className="collection">
                    {clientes.map((cliente, index) => (
                        <li key={index} className="collection-item">
                            <strong>{cliente.nome}</strong> <br />
                            Nome social: {cliente.nomeSocial} <br />
                            Gênero: {cliente.genero} <br />
                            Telefone: {cliente.telefoneDDD} {cliente.telefone} <br />
                            Produtos consumidos: {cliente.qntProdConsumido} <br />
                            Serviços consumidos: {cliente.qntServConsumido} <br />
                            Data de cadastro: {new Date(cliente.dataCadastro).toLocaleDateString()} <br />
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 8 }}>
                                <button
                                    className="btn"
                                    onClick={() => alert(`Editar cliente: ${cliente.nome}`)}
                                >
                                    Editar
                                </button>
                                <button className="btn" onClick={() => excluirCliente(index)}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
