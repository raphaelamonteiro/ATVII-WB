import React, { Component } from 'react';
import '../index.css';

type Produto = {
    id: number;
    nome: string;
    descricao: string;
};

type Servico = {
    id: number;
    nome: string;
    descricao: string;
};

type HomeProps = {
    trocarTela: (tela: 'clientes' | 'produtos' | 'servicos' | 'relatorios') => void;
    produtos: Produto[];
    servicos: Servico[];
};

class Home extends Component<HomeProps> {
    render() {
        const { produtos, servicos, trocarTela } = this.props;

        return (
            <>
                <div className="hero-section center-align" style={{ marginBottom: '0rem' }}>
                    <h2>Bem-vindo(a) ao Sistema - Grupo World Beauty</h2>
                    <p className="flow-text">Elegância, controle e praticidade para seu salão de beleza.</p>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            marginTop: '1rem',
                        }}
                    >
                        <button className="btn btn-large" onClick={() => trocarTela('clientes')}>
                            <i className="material-icons left">person</i>
                            Clientes
                        </button>
                        <button className="btn btn-large" onClick={() => trocarTela('produtos')}>
                            <i className="material-icons left">spa</i>
                            Produtos
                        </button>
                        <button className="btn btn-large" onClick={() => trocarTela('servicos')}>
                            <i className="material-icons left">brush</i>
                            Serviços
                        </button>
                        <button className="btn btn-large" onClick={() => trocarTela('relatorios')}>
                            <i className="material-icons left">assessment</i>
                            Relatórios
                        </button>
                    </div>
                </div>

                <div className="container">
                    <div className="section">
                        <h5 className="center-align">Produtos</h5>
                        {produtos.length === 0 ? (
                            <p className="center-align grey-text">Nenhum produto cadastrado.</p>
                        ) : (
                            <div className="row">
                                {produtos.slice(0, 3).map((produto) => (
                                    <div key={produto.id} className="col s12 m6 l4">
                                        <div className="card-home">
                                            <div className="card-image center-align">
                                                <i className="material-icons large">shopping_bag</i>
                                            </div>
                                            <div className="card-content">
                                                <span className="card-title">{produto.nome}</span>
                                                <p>{produto.descricao}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {produtos.length > 3 && (
                            <div className="center-align">
                                <button className="btn" onClick={() => trocarTela('produtos')}>
                                    <i className="material-icons left">arrow_forward</i>
                                    Ver todos os Produtos
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="section">
                        <h5 className="center-align">Serviços</h5>
                        {servicos.length === 0 ? (
                            <p className="center-align grey-text">Nenhum serviço cadastrado.</p>
                        ) : (
                            <div className="row">
                                {servicos.slice(0, 3).map((servico) => (
                                    <div key={servico.id} className="col s12 m6 l4">
                                        <div className="card-home">
                                            <div className="card-image center-align">
                                                <i className="material-icons large">build</i>
                                            </div>
                                            <div className="card-content">
                                                <span className="card-title">{servico.nome}</span>
                                                <p>{servico.descricao}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {servicos.length > 3 && (
                            <div className="center-align">
                                <button className="btn" onClick={() => trocarTela('servicos')}>
                                    <i className="material-icons left">arrow_forward</i>
                                    Ver todos os Serviços
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
