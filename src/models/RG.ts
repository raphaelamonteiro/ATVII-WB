class RG {
    private valor: string;
    private dataEmissao: Date;
  
    constructor(valor: string, dataEmissao: Date) {
      this.valor = valor;
      this.dataEmissao = dataEmissao;
    }
  
    public get getValor() {
      return this.valor;
    }
  
    public get getDataEmissao() {
      return this.dataEmissao;
    }
  
    public toString() {
      return `${
        this.valor
      } (emitido em ${this.dataEmissao.toLocaleDateString()})`;
    }
  }
  
  export default RG;