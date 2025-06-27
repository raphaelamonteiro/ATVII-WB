import React, { Component } from 'react';
import { produtos as produtosIniciaisRaw } from './../../data/dados';
import type Produto from '../../models/Produto';

interface ProdutoFormData {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
}

interface ProdutoState extends ProdutoFormData {
    editando: boolean;
    index: number | null;
    produtos: ProdutoFormData[];
}

export class ProdutoForm extends Component<{}, ProdutoState> {
    state: ProdutoState = {
        id: '',
        nome: '',
        preco: '',
        descricao: '',
        editando: false,
        index: null,
        produtos: [],
    };

    componentDidMount() {
        const produtosSalvos = JSON.parse(localStorage.getItem('produtos') || 'null');

        if (produtosSalvos && produtosSalvos.length > 0) {
            this.setState({ produtos: produtosSalvos });
        } else {
            // transforma os objetos da classe Produto em objetos simples para o formulário
            const produtosConvertidos: ProdutoFormData[] = produtosIniciaisRaw.map((s: Produto) => ({
                id: s.getId(),
                nome: s.nome,
                descricao: s.getDescricao(),
                preco: s.getPreco(),
            }));

            this.setState({ produtos: produtosConvertidos });
            localStorage.setItem('produtos', JSON.stringify(produtosConvertidos));
        }

        const produtoEditando = localStorage.getItem('produtoEditando');
        if (produtoEditando) {
            const dados = JSON.parse(produtoEditando);
            this.setState({ ...dados, editando: true });
            localStorage.removeItem('produtoEditando');
        }
    }



    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const produtos = [...this.state.produtos];

        if (this.state.editando && this.state.index !== null) {
            produtos[this.state.index] = {
                id: this.state.id,
                nome: this.state.nome,
                preco: this.state.preco,
                descricao: this.state.descricao,
            };
        } else {
            const novoProduto = {
                id: crypto.randomUUID(),
                nome: this.state.nome,
                preco: this.state.preco,
                descricao: this.state.descricao,
            };
            produtos.push(novoProduto);
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        this.setState({
            id: '',
            nome: '',
            preco: '',
            descricao: '',
            editando: false,
            index: null,
            produtos,
        });
    };

    editarProduto = (index: number) => {
        const produto = this.state.produtos[index];
        this.setState({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            descricao: produto.descricao,
            editando: true,
            index,
        });
    };

    excluirProduto = (index: number) => {
        const produtos = [...this.state.produtos];
        produtos.splice(index, 1);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        this.setState({ produtos });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="card-panel">
                    <h5>{this.state.editando ? 'Editar Produto' : 'Cadastro de Produto'}</h5>

                    <div className="input-field">
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleChange}
                            required
                        />
                        <label htmlFor="nome" className={this.state.nome ? 'active' : ''}>
                            Nome
                        </label>
                    </div>

                    <div className="input-field">
                        <input
                            id="preco"
                            type="number"
                            name="preco"
                            value={this.state.preco}
                            onChange={this.handleChange}
                            required
                        />
                        <label htmlFor="preco" className={this.state.preco ? 'active' : ''}>
                            Preço
                        </label>
                    </div>

                    <div className="input-field">
                        <input
                            id="descricao"
                            type="text"
                            name="descricao"
                            value={this.state.descricao}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="descricao" className={this.state.descricao ? 'active' : ''}>
                            Descrição
                        </label>
                    </div>

                    <button type="submit" className="btn">
                        {this.state.editando ? 'Atualizar' : 'Cadastrar'}
                    </button>
                </form>

                <div style={{ marginTop: 32 }}>
                    <h5>Produtos cadastrados</h5>
                    {this.state.produtos.length === 0 ? (
                        <p>Nenhum produto cadastrado.</p>
                    ) : (
                        <ul className="collection">
                            {this.state.produtos.map((produto, idx) => (
                                <li key={produto.id} className="collection-item">
                                    <strong>{produto.nome}</strong><br />
                                    Preço: R$ {produto.preco}<br />
                                    {produto.descricao}
                                    <div style={{ marginTop: 8 }}>
                                        <button
                                            className="btn"
                                            onClick={() => this.editarProduto(idx)}
                                            style={{ marginRight: 8 }}
                                        >
                                            Editar
                                        </button>
                                        <button className="btn" onClick={() => this.excluirProduto(idx)}>
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
