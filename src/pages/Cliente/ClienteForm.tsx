import React, { Component } from "react";
import M from "materialize-css";

interface Cliente {
    nome: string;
    nomeSocial: string;
    genero: string;
    cpf: string;
    rg: string;
    telefone: string;
}

interface State {
    nome: string;
    nomeSocial: string;
    genero: string;
    cpf: string;
    rg: string;
    telefone: string;
    clientes: Cliente[];
    editando: boolean;
    indexEditando: number | null;
}

class ClienteForm extends Component<{}, State> {
    state: State = {
        nome: '',
        nomeSocial: '',
        genero: '',
        cpf: '',
        rg: '',
        telefone: '',
        clientes: [],
        editando: false,
        indexEditando: null,
    };

    componentDidMount(): void {
        const elems = document.querySelectorAll("select");
        M.FormSelect.init(elems);

        const clientesSalvos = localStorage.getItem("clientes");
        if (clientesSalvos) {
            this.setState({ clientes: JSON.parse(clientesSalvos) });
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const novoCliente: Cliente = {
            nome: this.state.nome,
            nomeSocial: this.state.nomeSocial,
            genero: this.state.genero,
            cpf: this.state.cpf,
            rg: this.state.rg,
            telefone: this.state.telefone
        };

        const clientes = [...this.state.clientes];

        if (this.state.editando && this.state.indexEditando !== null) {
            clientes[this.state.indexEditando] = novoCliente;
        } else {
            clientes.push(novoCliente);
        }

        localStorage.setItem("clientes", JSON.stringify(clientes));

        this.setState({
            nome: '',
            nomeSocial: '',
            genero: '',
            cpf: '',
            rg: '',
            telefone: '',
            clientes,
            editando: false,
            indexEditando: null,
        });

        setTimeout(() => M.FormSelect.init(document.querySelectorAll("select")), 0);
    };

    editarCliente = (index: number) => {
        const cliente = this.state.clientes[index];
        this.setState({
            nome: cliente.nome,
            nomeSocial: cliente.nomeSocial,
            genero: cliente.genero,
            cpf: cliente.cpf,
            rg: cliente.rg,
            telefone: cliente.telefone,
            editando: true,
            indexEditando: index,
        });

        // Reaplica o select
        setTimeout(() => M.FormSelect.init(document.querySelectorAll("select")), 0);
    };

    excluirCliente = (index: number) => {
        const clientes = [...this.state.clientes];
        clientes.splice(index, 1);
        localStorage.setItem("clientes", JSON.stringify(clientes));
        this.setState({ clientes });
    };

    render() {
        return (
            <div className="container">
                <div className="card-panel z-depth-2">
                    <h5>{this.state.editando ? 'Editar Cliente' : 'Cadastro de Cliente'}</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input id="nome" name="nome" type="text" value={this.state.nome} onChange={this.handleChange} required />
                            <label htmlFor="nome" className={this.state.nome ? 'active' : ''}>Nome</label>
                        </div>

                        <div className="input-field">
                            <input id="nomeSocial" name="nomeSocial" type="text" value={this.state.nomeSocial} onChange={this.handleChange} />
                            <label htmlFor="nomeSocial" className={this.state.nomeSocial ? 'active' : ''}>Nome Social</label>
                        </div>

                        <div className="input-field">
                            <select id="genero" name="genero" value={this.state.genero} onChange={this.handleChange} required>
                                <option value="" disabled>Selecione o gênero</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                            <label htmlFor="genero">Gênero</label>
                        </div>

                        <div className="input-field">
                            <input id="cpf" name="cpf" type="text" value={this.state.cpf} onChange={this.handleChange} required />
                            <label htmlFor="cpf" className={this.state.cpf ? 'active' : ''}>CPF</label>
                        </div>

                        <div className="input-field">
                            <input id="rg" name="rg" type="text" value={this.state.rg} onChange={this.handleChange} required />
                            <label htmlFor="rg" className={this.state.rg ? 'active' : ''}>RG</label>
                        </div>

                        <div className="input-field">
                            <input id="telefone" name="telefone" type="tel" value={this.state.telefone} onChange={this.handleChange} required />
                            <label htmlFor="telefone" className={this.state.telefone ? 'active' : ''}>Telefone</label>
                        </div>

                        <div className="input-field center-align" style={{ marginTop: "2rem" }}>
                            <button className="btn waves-effect waves-light" type="submit">
                                {this.state.editando ? 'Atualizar' : 'Cadastrar'}
                            </button>
                        </div>
                    </form>
                </div>

                <div style={{ marginTop: 32 }}>
                    <h5>Clientes Cadastrados</h5>
                    {this.state.clientes.length === 0 ? (
                        <p>Nenhum cliente cadastrado.</p>
                    ) : (
                        <ul className="collection">
                            {this.state.clientes.map((cliente, idx) => (
                                <li key={idx} className="collection-item">
                                    <strong>{cliente.nome}</strong> ({cliente.genero})<br />
                                    CPF: {cliente.cpf} | RG: {cliente.rg} | Tel: {cliente.telefone}<br />
                                    <button
                                        className="btn"
                                        onClick={() => this.editarCliente(idx)}
                                        style={{ marginRight: 8 }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn"
                                        onClick={() => this.excluirCliente(idx)}
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

export default ClienteForm;
