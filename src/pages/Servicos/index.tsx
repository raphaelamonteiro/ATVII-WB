import React from "react";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

interface IServico {
  id: string;
  nomeServ: string;
  descricao: string;
  valor: number;
}
class Servico extends React.Component {
  state: {
    servicos: IServico[];
    filtro: string;
  } = {
    servicos: [
      {
        id: "S1",
        nomeServ: "Corte Masculino",
        descricao: "Corte de cabelo padrao maquina",
        valor: 30,
      },
      {
        id: "S2",
        nomeServ: "Hidratacao",
        descricao: "Hidratacao de cabelo",
        valor: 79.99,
      },
      {
        id: "S3",
        nomeServ: "Limpeza de pele",
        descricao: "Limpeza de pele com mascaras de argila",
        valor: 50,
      },
    ],
    filtro: "",
  };

  buscarServicos = (): IServico[] => {
    return this.state.servicos;
  };

  filtrarServicos = (servicos: IServico[], filtro: string): IServico[] => {
    if (!filtro) return servicos;
    return servicos.filter(
      (servico) =>
        servico.id.toLowerCase().includes(filtro.toLowerCase()) ||
        servico.nomeServ.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtro: e.target.value });
  };

  render(): React.ReactNode {
    const {servicos, filtro} = this.state;
    const servicosFiltrados = this.filtrarServicos(servicos, filtro);
    
    return (
      <div className="container-tipos">
        <div className="container-cli-pro-ser">
          <h2>Serviços</h2>
          <div className="search-session">
            <div className="search-bar">
              <SearchBar
                placeholder="Digite o ID do serviço"
                onChange={this.handleSearchChange}
              />
            </div>
            <Link to={"/cadastroservico"} style={{ color: "inherit" }}>
              <div className="button-cadastro">
                <span>Cadastrar Serviço</span>
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
              {servicosFiltrados.map((servico) => (
                <tr key={servico.id}>
                  <td>{servico.id}</td>
                  <td>{servico.nomeServ}</td>
                  <td>{servico.descricao}</td>
                  <td>R$ {servico.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Servico;
