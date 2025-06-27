class Telefone {
    private ddd: string;
    private numero: string;
  
    constructor(ddd: string, numero: string) {
      this.ddd = ddd;
      this.numero = numero;
    }
  
    public get getDDD() {
      return this.ddd;
    }
  
    public get getNumero() {
      return this.numero;
    }
  
    public get toString() {
      return `${this.ddd}-${this.numero}`;
    }
  }
  
  export default Telefone;