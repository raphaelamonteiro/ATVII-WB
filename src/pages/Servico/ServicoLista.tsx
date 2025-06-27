import React from 'react';
import Servico from '../../models/Servico';

interface ServicoListaProps {
    servicos: Servico[];
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
}

const ServicoLista: React.FC<ServicoListaProps> = ({ servicos, onEdit, onDelete }) => {
    if (servicos.length === 0) return <p>Nenhum serviço cadastrado.</p>;

    return (
        <div className="row">
            {servicos.map((servico, idx) => (
                <div key={servico.getId()} className="col s12 m4">
                    <div className="card small">
                        <div className="card-content">
                            <span className="card-title">{servico.nome}</span>
                            <p>Descrição: {servico.getDescricao()}</p>
                        </div>
                        <div className="card-action">
                            <button className="btn" onClick={() => onEdit(idx)} style={{ marginRight: 8 }}>
                                Editar
                            </button>
                            <button className="btn" onClick={() => onDelete(idx)}>
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicoLista;
