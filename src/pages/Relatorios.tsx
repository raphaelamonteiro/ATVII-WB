import React from "react";
import type Cliente from "../models/Clientes";
import {
    top10ClientesMaisConsumiram,
    top10ClientesMenosConsumiram,
    top5ClientesMaisGastaram,
    clientesPorGenero,
    itensMaisConsumidos,
    itensMaisConsumidosPorGenero,
} from "../util/relatorios";

type RelatoriosPageProps = {
    clientes: Cliente[];
};

export default function RelatoriosPage({ clientes }: RelatoriosPageProps) {
    const maisConsumiram = top10ClientesMaisConsumiram(clientes);
    const menosConsumiram = top10ClientesMenosConsumiram(clientes);
    const maisGastaram = top5ClientesMaisGastaram(clientes);
    const porGenero = clientesPorGenero(clientes);
    const itensPopulares = itensMaisConsumidos(clientes);
    const itensPorGenero = itensMaisConsumidosPorGenero(clientes);

    return (
        <div className="container">
            <h4>Relatórios</h4>

            {/* Botão Voltar */}
            <div style={{ marginBottom: "1.5rem", textAlign: "right" }}>
                <button
                    className="btn btn-small"
                    onClick={() => window.history.back()}
                    style={{ backgroundColor: "var(--cor-primaria)" }}
                >
                    ← Voltar
                </button>
            </div>

            <section>
                <h5>Top 10 clientes que mais consumiram</h5>
                <ul className="collection">
                    {maisConsumiram.length ? (
                        maisConsumiram.map((c, i) => (
                            <li key={i} className="collection-item">
                                <span>{c.nome}</span>
                                <strong>{c.quantidade} itens</strong>
                            </li>
                        ))
                    ) : (
                        <p>Nenhum dado disponível.</p>
                    )}
                </ul>
            </section>

            <section>
                <h5>Top 10 clientes que menos consumiram</h5>
                <ul className="collection">
                    {menosConsumiram.length ? (
                        menosConsumiram.map((c, i) => (
                            <li key={i} className="collection-item">
                                <span>{c.nome}</span>
                                <strong>{c.quantidade} itens</strong>
                            </li>
                        ))
                    ) : (
                        <p>Nenhum dado disponível.</p>
                    )}
                </ul>
            </section>

            <section>
                <h5>💰 Top 5 clientes que mais gastaram</h5>
                <ul className="collection">
                    {maisGastaram.length ? (
                        maisGastaram.map((c, i) => (
                            <li key={i} className="collection-item">
                                <span>{c.nome}</span>
                                <strong>R$ {c.totalGasto.toFixed(2)}</strong>
                            </li>
                        ))
                    ) : (
                        <p>Nenhum dado disponível.</p>
                    )}
                </ul>
            </section>

            <section>
                <h5>🧑‍🤝‍🧑 Clientes por gênero</h5>
                {Object.entries(porGenero).length ? (
                    Object.entries(porGenero).map(([genero, lista], i) => (
                        <div key={i} style={{ marginBottom: "1rem" }}>
                            <strong>{genero}:</strong>{" "}
                            {lista.length ? lista.map((c) => c.nome).join(", ") : "Nenhum cliente"}
                        </div>
                    ))
                ) : (
                    <p>Nenhum dado disponível.</p>
                )}
            </section>

            <section>
                <h5>📦 Produtos e Serviços mais consumidos (geral)</h5>
                <ul className="collection">
                    {itensPopulares.length ? (
                        itensPopulares.map((item, i) => (
                            <li key={i} className="collection-item">
                                <span>{item.nome}</span>
                                <strong>{item.quantidade} vezes</strong>
                            </li>
                        ))
                    ) : (
                        <p>Nenhum dado disponível.</p>
                    )}
                </ul>
            </section>

            <section>
                <h5>📦 Produtos e Serviços mais consumidos por gênero</h5>
                {Object.entries(itensPorGenero).length ? (
                    Object.entries(itensPorGenero).map(([genero, itens], i) => (
                        <div key={i} style={{ marginBottom: "1rem" }}>
                            <strong>{genero}:</strong>
                            <ul className="collection" style={{ marginTop: "0.5rem" }}>
                                {Object.entries(itens).map(([nome, qtd], j) => (
                                    <li key={j} className="collection-item">
                                        <span>{nome}</span>
                                        <strong>{qtd} vezes</strong>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>Nenhum dado disponível.</p>
                )}
            </section>
        </div>
    );
}
