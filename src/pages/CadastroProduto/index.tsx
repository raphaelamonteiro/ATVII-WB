import React from "react";
import { IProduto } from "../../types/IProduto";

class CadastroProduto extends React.Component<{}, IProduto> {
  constructor(props: {}) {
    super(props);

    const produtoEditando = localStorage.getItem("produtoEditando");
    const dados: IProduto = produtoEditando
      ? JSON.parse(produtoEditando)
      : {
        id: "",
        nome: "",
        descricao: "",
        valor: 0,
      };

    this.state = {
      id: dados.id,
      nome: dados.nome,
      descricao: dados.descricao,
      valor: dados.valor,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: name === "valor" ? parseFloat(value) : value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const produtos: IProduto[] = JSON.parse(localStorage.getItem("produtos") || "[]");

    const index = produtos.findIndex((p) => p.id === this.state.id);

    if (index >= 0) {
      // Editar
      produtos[index] = this.state;
    } else {
      // Cadastrar novo
      produtos.push(this.state);
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));
    localStorage.removeItem("produtoEditando");

    alert("Produto salvo com sucesso!");

    this.setState({
      id: "",
      nome: "",
      descricao: "",
      valor: 0,
    });
  };

  render() {
    return (
      <div className="container-cadastro">
        <div className="title-cadastro">
          <h2>{this.state.id ? "Editar Produto" : "Cadastro de Produto"}</h2>
        </div>
        <div className="form-cadastro">
          <form onSubmit={this.handleSubmit}>
            <p>ID:</p>
            <input
              name="id"
              placeholder="ID"
              value={this.state.id}
              onChange={this.handleChange}
              disabled={!!localStorage.getItem("produtoEditando")} // ID não editável em edição
            />
            <p>Nome do Produto:</p>
            <input
              name="nome"
              placeholder="Nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
            <p>Descrição:</p>
            <input
              name="descricao"
              placeholder="Descrição"
              value={this.state.descricao}
              onChange={this.handleChange}
            />
            <p>Valor:</p>
            <input
              name="valor"
              type="number"
              step="0.01"
              placeholder="Valor"
              value={this.state.valor}
              onChange={this.handleChange}
            />
            <button type="submit">{this.state.id ? "Salvar Edição" : "Cadastrar"}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroProduto;
