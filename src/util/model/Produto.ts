export abstract class Produto {

    private _numero: number;
    private _categoria: string;
    private _nome: string;
    private _preco: number;
    private _estoque: number;

    constructor(numero:number, categoria: string, nome: string, preco: number, estoque: number) {
        this._numero = numero;
        this._categoria = categoria;
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
    }

    public get numero() {
        return this._numero;
    } 

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get categoria() {
        return this._categoria;
    } 

    public set categoria(categoria:string) {
        this._categoria = categoria;
    }    

    public get nome() {
        return this._nome;
    } 

    public set nome(nome: string) {
        this._nome = nome;
    }    

    public get preco() {
        return this._preco;
    } 

    public set preco(preco: number) {
        this._preco = preco;
    }    

    public get estoque() {
        return this._estoque;
    } 

    public set estoque(estoque: number) {
        this._estoque = estoque;
    }    

    
    public visualizar(): void {

        console.log("\n\n*****************************************************");
        console.log("Detalhes do produto:");
        console.log("*****************************************************");
        console.log("Numero do Produto: " + this._numero);
        console.log("Categoria: " + this._categoria);
        console.log("Nome: " + this._nome);
        console.log(`Preço:  R$ ${this._preco.toFixed(2)}`);
        console.log(`Estoque:  ${this._estoque} uninades`);        
    }

    
}