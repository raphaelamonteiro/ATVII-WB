import type Cliente from "../models/Clientes";

export function top10ClientesMaisConsumiram(clientes: Cliente[]) {
  return clientes
    .map(cliente => ({
      nome: cliente.nome,
      quantidade: cliente.qntProdConsumido + cliente.qntServConsumido,
    }))
    .sort((a, b) => b.quantidade - a.quantidade)
    .slice(0, 10);
}
export function clientesPorGenero(clientes: Cliente[]) {
  const generos: Record<string, Cliente[]> = {};
  clientes.forEach(cliente => {
    if (!generos[cliente.genero]) {
      generos[cliente.genero] = [];
    }
    generos[cliente.genero].push(cliente);
  });
  return generos;
}
export function itensMaisConsumidos(clientes: Cliente[]) {
  const contagem: Record<string, number> = {};

  clientes.forEach(cliente => {
    // verifica se existe produtosConsumidos e se é array
    if (Array.isArray(cliente.produtosConsumidos)) {
      cliente.produtosConsumidos.forEach(produto => {
        if (produto && produto.nome) {
          contagem[produto.nome] = (contagem[produto.nome] || 0) + 1;
        }
      });
    }
    // verifica se existe servicosConsumidos e se é array
    if (Array.isArray(cliente.servicosConsumidos)) {
      cliente.servicosConsumidos.forEach(servico => {
        if (servico && servico.nome) {
          contagem[servico.nome] = (contagem[servico.nome] || 0) + 1;
        }
      });
    }
  });

  return Object.entries(contagem)
    .map(([nome, quantidade]) => ({ nome, quantidade }))
    .sort((a, b) => b.quantidade - a.quantidade);
}

export function itensMaisConsumidosPorGenero(clientes: Cliente[]) {
  const porGenero: Record<string, Record<string, number>> = {};

  clientes.forEach(cliente => {
    if (!porGenero[cliente.genero]) porGenero[cliente.genero] = {};

    // Proteção para produtosConsumidos
    if (Array.isArray(cliente.produtosConsumidos)) {
      cliente.produtosConsumidos.forEach(produto => {
        if (produto && produto.nome) {
          porGenero[cliente.genero][produto.nome] = (porGenero[cliente.genero][produto.nome] || 0) + 1;
        }
      });
    }

    // Proteção para servicosConsumidos
    if (Array.isArray(cliente.servicosConsumidos)) {
      cliente.servicosConsumidos.forEach(servico => {
        if (servico && servico.nome) {
          porGenero[cliente.genero][servico.nome] = (porGenero[cliente.genero][servico.nome] || 0) + 1;
        }
      });
    }
  });

  return porGenero;
}


export function top10ClientesMenosConsumiram(clientes: Cliente[]) {
  return clientes
    .map(cliente => ({
      nome: cliente.nome,
      quantidade: cliente.qntProdConsumido + cliente.qntServConsumido,
    }))
    .sort((a, b) => a.quantidade - b.quantidade)
    .slice(0, 10);
}
export function top5ClientesMaisGastaram(clientes: Cliente[]) {
  return clientes
    .map(cliente => {
      const total = cliente.produtosConsumidos.reduce((soma, p) => soma + parseFloat(p.preco), 0);
      return { nome: cliente.nome, totalGasto: total };
    })
    .sort((a, b) => b.totalGasto - a.totalGasto)
    .slice(0, 5);
}
