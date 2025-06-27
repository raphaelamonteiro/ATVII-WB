import React, { Component } from 'react';
import { servicos as servicosIniciaisRaw } from './../../data/dados';
import Servico from '../../models/Servico';

interface ServicoFormData {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
}

interface ServicoState extends ServicoFormData {
    editando: boolean;
    index: number | null;
    servicos: ServicoFormData[];
}

export class ServicoForm extends Component<{}, ServicoState> {
    state: ServicoState = {
        id: '',
        nome: '',
        preco: '',
        descricao: '',
        editando: false,
        index: null,
        servicos: [],
    };

    componentDidMount() {
        const servicosSalvos = JSON.parse(localStorage.getItem('servicos') || 'null');

        if (servicosSalvos && servicosSalvos.length > 0) {
            this.setState({ servicos: servicosSalvos });
        } else {
            // transforma os objetos da classe Servico em objetos simples para o formulário
            const servicosConvertidos: ServicoFormData[] = servicosIniciaisRaw.map((s: Servico) => ({
                id: s.getId(),
                nome: s.nome,
                descricao: s.getDescricao(),
                preco: s.getPreco(),
            }));

            this.setState({ servicos: servicosConvertidos });
            localStorage.setItem('servicos', JSON.stringify(servicosConvertidos));
        }

        const servicoEditando = localStorage.getItem('servicoEditando');
        if (servicoEditando) {
            const dados = JSON.parse(servicoEditando);
            this.setState({ ...dados, editando: true });
            localStorage.removeItem('servicoEditando');
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const servicos = [...this.state.servicos];

        if (this.state.editando && this.state.index !== null) {
            servicos[this.state.index] = {
                id: this.state.id,
                nome: this.state.nome,
                preco: this.state.preco,
                descricao: this.state.descricao,
            };
        } else {
            servicos.push({
                id: this.state.id || crypto.randomUUID(),
                nome: this.state.nome,
                preco: this.state.preco,
                descricao: this.state.descricao,
            });
        }

        localStorage.setItem('servicos', JSON.stringify(servicos));
        this.setState({
            id: '',
            nome: '',
            preco: '',
            descricao: '',
            editando: false,
            index: null,
            servicos,
        });
    };

    editarServico = (index: number) => {
        const servico = this.state.servicos[index];
        this.setState({
            ...servico,
            editando: true,
            index,
        });
    };

    excluirServico = (index: number) => {
        const servicos = [...this.state.servicos];
        servicos.splice(index, 1);
        localStorage.setItem('servicos', JSON.stringify(servicos));
        this.setState({ servicos });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="card-panel">
                    <h5>{this.state.editando ? 'Editar Serviço' : 'Cadastro de Serviço'}</h5>

                    <div className="input-field">
                        <input
                            type="text"
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange}
                            required
                        />
                        <label className={this.state.id ? 'active' : ''}>ID</label>
                    </div>

                    <div className="input-field">
                        <input
                            type="text"
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleChange}
                            required
                        />
                        <label className={this.state.nome ? 'active' : ''}>Nome</label>
                    </div>

                    <div className="input-field">
                        <input
                            type="number"
                            name="preco"
                            value={this.state.preco}
                            onChange={this.handleChange}
                            required
                        />
                        <label className={this.state.preco ? 'active' : ''}>Preço</label>
                    </div>

                    <div className="input-field">
                        <input
                            type="text"
                            name="descricao"
                            value={this.state.descricao}
                            onChange={this.handleChange}
                            required
                        />
                        <label className={this.state.descricao ? 'active' : ''}>Descrição</label>
                    </div>

                    <button type="submit" className="btn">
                        {this.state.editando ? 'Atualizar' : 'Cadastrar'}
                    </button>
                </form>

                <div style={{ marginTop: 32 }}>
                    <h5>Serviços cadastrados</h5>
                    {this.state.servicos.length === 0 ? (
                        <p>Nenhum serviço cadastrado.</p>
                    ) : (
                        <ul className="collection">
                            {this.state.servicos.map((servico, idx) => (
                                <li key={servico.id} className="collection-item">
                                    <strong>{servico.nome}</strong><br />
                                    Preço: R$ {servico.preco}<br />
                                    {servico.descricao}
                                    <div style={{ marginTop: 8 }}>
                                        <button
                                            className="btn"
                                            onClick={() => this.editarServico(idx)}
                                            style={{ marginRight: 8 }}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="btn"
                                            onClick={() => this.excluirServico(idx)}
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </>
        );
    }
}
