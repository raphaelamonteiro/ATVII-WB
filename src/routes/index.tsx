import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Home from '../pages/Home';
import ClienteForm from './../pages/Cliente/ClienteForm';
import { ClienteLista } from './../pages/Cliente/ClienteLista';
import { ServicoForm } from './../pages/Servico/ServicoForm';
import ServicoLista from './../pages/Servico/ServicoLista';

import { ProdutoForm } from '../pages/Produto/ProdutoForm';
import ProdutoLista from './../pages/Produto/ProdutoLista';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Produto from '../models/Produto';
import Servico from '../models/Servico';
import Cliente from '../models/Clientes';
import { produtos, servicos, clientes } from '../data/dados';
import RelatoriosPage from '../pages/Relatorios';

interface State {
    produtos: Produto[];
    servicos: Servico[];
    clientes: Cliente[];
}

function RouterApp() {
    const [produtosState, setProdutosState] = useState<Produto[]>(produtos);
    const [servicosState, setServicosState] = useState<Servico[]>(servicos);
    const [clientesState, setClientesState] = useState<Cliente[]>(clientes);

    const navigate = useNavigate();

    // trocarTela agora usa useNavigate
    const trocarTela = (tela: 'clientes' | 'produtos' | 'servicos' | 'relatorios') => {
        navigate(`/${tela}`);
    };

    const excluirCliente = (index: number) => {
        setClientesState((prev) => {
            const novosClientes = [...prev];
            novosClientes.splice(index, 1);
            return novosClientes;
        });
    };

    return (
        <>
            <Header />
            <main className="container" style={{ minHeight: '80vh' }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                trocarTela={trocarTela}
                                produtos={produtosState.map((p) => ({
                                    id: Number(p.getId()),
                                    nome: p.nome,
                                    descricao: p.getDescricao(),
                                    preco: p.preco,
                                }))}
                                servicos={servicosState.map((s) => ({
                                    id: Number(s.getId()),
                                    nome: s.nome,
                                    descricao: s.getDescricao(),
                                }))}
                            />
                        }
                    />
                    <Route path="/produto" element={<ProdutoForm />} />
                    <Route
                        path="/produtos"
                        element={
                            <ProdutoLista produtos={produtosState} onEdit={() => { }} onDelete={() => { }} />
                        }
                    />
                    <Route
                        path="/servicos"
                        element={
                            <ServicoLista servicos={servicosState} onEdit={() => { }} onDelete={() => { }} />
                        }
                    />
                    <Route path="/servico" element={<ServicoForm />} />
                    <Route
                        path="/clientes"
                        element={
                            <ClienteLista clientes={clientesState} excluirCliente={excluirCliente} />
                        }
                    />
                    <Route path="/cliente" element={<ClienteForm />} />
                    <Route
                        path="/relatorios"
                        element={<RelatoriosPage clientes={clientesState} />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

// Esse wrapper é necessário para usar useNavigate fora de <BrowserRouter>
function RouterWrapper() {
    return (
        <BrowserRouter>
            <RouterApp />
        </BrowserRouter>
    );
}

export default RouterWrapper;
