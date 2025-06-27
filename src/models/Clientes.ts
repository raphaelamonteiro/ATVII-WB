import CPF from "./CPF";
import Servico from "./Servico";
import Produto from "./Produto";
import RG from "./RG";
import Telefone from "./Telefone";

class Cliente {
  public nome: string;
  public nomeSocial: string;
  public genero: string;
  private _cpf: CPF;
  private _rg: RG;
  private _dataCadastro: Date;
  private _telefone: Telefone;
  private _produtosConsumidos: Produto[];
  private _servicosConsumidos: Servico[];

  constructor(
    nome: string,
    nomeSocial: string,
    genero: string,
    cpf: CPF,
    rg: RG,
    telefone: Telefone,
    dataCadastro: Date
  ) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.genero = genero;
    this._cpf = cpf;
    this._rg = rg;
    this._telefone = telefone;
    this._dataCadastro = dataCadastro;
    this._produtosConsumidos = [];
    this._servicosConsumidos = [];
  }

  get cpf() {
    return this._cpf;
  }

  get rg() {
    return this._rg;
  }

  get dataCadastro() {
    return this._dataCadastro;
  }

  get telefoneDDD() {
    return this._telefone.getDDD;
  }

  get telefone() {
    return this._telefone.toString;
  }

  get produtosConsumidos() {
    return this._produtosConsumidos;
  }

  get servicosConsumidos() {
    return this._servicosConsumidos;
  }

  get qntProdConsumido() {
    return this._produtosConsumidos.length;
  }

  get qntServConsumido() {
    return this._servicosConsumidos.length;
  }

  consumirProduto(produto: Produto) {
    this._produtosConsumidos.push(produto);
  }

  consumirServico(servico: Servico) {
    this._servicosConsumidos.push(servico);
  }
}

export default Cliente;
