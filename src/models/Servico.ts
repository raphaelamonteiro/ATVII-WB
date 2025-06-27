class Servico {
  private id: string;
  public nome: string;
  private descricao: string;
  private preco: string;

  constructor(id: string, nome: string, descricao: string, preco: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
  }

  public getId(): string {
    return this.id;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getPreco(): string {
    return this.preco;
  }
}

export default Servico;
