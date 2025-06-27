import React from "react";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

interface IProduto {
  id: string;
  nomeProd: string;
  descricao: string;
  valor: number;
}
class Produto extends React.Component {
  state: {
    produtos: IProduto[];
    filtro: string;
  } = {
    produtos: [
      {
        id: "P1",
        nomeProd: "Locao Capilar",
        descricao: "Locao para deixar os cabelos mais sedosos.",
        valor: 35.99,
      },
      {
        id: "P2",
        nomeProd: "Creme Hidratante",
        descricao: "Creme hidratante para passar no rosto, maos e corpo.",
        valor: 20.45,
      },
    ],
    filtro: "",
  };

  buscarProduto = (): IProduto[] => {
    return this.state.produtos;
  };

  filtrarProdutos = (produtos: IProduto[], filtro: string): IProduto[] => {
    if (!filtro) return produtos;
    return produtos.filter(
      (produto) =>
        produto.id.toLowerCase().includes(filtro.toLowerCase()) ||
        produto.nomeProd.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtro: e.target.value });
  };

  render(): React.ReactNode {
    const { produtos, filtro } = this.state;
    const produtosFiltrados = this.filtrarProdutos(produtos, filtro);

    return (
      <div className="container-tipos">
        <div className="container-cli-pro-ser">
          <h2>Produtos</h2>
          <div className="search-session">
            <div className="search-bar">
              <SearchBar
                placeholder="Digite o ID ou o nome do produto"
                onChange={this.handleSearchChange}
              />
            </div>
            <Link to={"/cadastroproduto"} style={{ color: "inherit" }}>
              <div className="button-cadastro">
                <span>Cadastrar Produto</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="table-component" role="region" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descriçao</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {produtosFiltrados.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nomeProd}</td>
                  <td>{produto.descricao}</td>
                  <td>R$ {produto.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Produto;
