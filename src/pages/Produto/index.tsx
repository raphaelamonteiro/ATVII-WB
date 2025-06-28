import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { produtos as produtosFixos } from "../../data/Produtos";
import { IProduto } from "../../types/IProduto";
import TabelaProdutos from "./TabelaProdutos";
import SearchBar from "../../components/SearchBar";

const ProdutosPage: React.FC = () => {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [filtro, setFiltro] = useState("");

  // Carrega dados do localStorage + fixos
  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem("produtos") || "[]") as IProduto[];

    const todos = [...produtosFixos];

    salvos.forEach((c) => {
      const existe = todos.some((fixo) => fixo.id === c.id);
      if (!existe) todos.push(c);
    });

    setProdutos(todos);
  }, []);

  const excluirProduto = (id: string) => {
    const novos = produtos.filter((c) => c.id !== id);

    // Só salva os que não são fixos
    const apenasCustomizados = novos.filter(
      (c) => !produtosFixos.some((fixo) => fixo.id === c.id)
    );

    localStorage.setItem("produtos", JSON.stringify(apenasCustomizados));
    setProdutos(novos);
  };

  const editarProduto = (produto: IProduto) => {
    localStorage.setItem("produtoEditando", JSON.stringify(produto));
    window.location.href = "/cadastroproduto";
  };


  const filtrarProdutos = (produtos: IProduto[]): IProduto[] => {
    let filtrados = [...produtos];

    if (filtro.trim()) {
      filtrados = filtrados.filter(
        (produto) =>
          produto.id.includes(filtro) ||
          produto.nome.toLowerCase().includes(filtro.toLowerCase())
      );
    }

    return filtrados;
  };

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Produtos</h2>
        <div className="search-session">
          <div className="search-bar">
            <SearchBar
              placeholder="Digite o ID ou nome do Cliente"
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>
          <Link to="/cadastroproduto" style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Produto</span>
            </div>
          </Link>
        </div>
      </div>

      <TabelaProdutos
        produtos={filtrarProdutos(produtos)}
        onExcluir={excluirProduto}
        onEditar={editarProduto}
      />

    </div>
  );
};

export default ProdutosPage;
