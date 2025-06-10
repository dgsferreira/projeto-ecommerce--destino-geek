import { Produto } from "./Produto";

export class ProdutoLivros extends Produto {

    private _autor: string;

    constructor(numero: number, nome: string, categoria: string, preco: number, estoque: number, autor: string) {
        
        super(numero, nome, categoria, preco, estoque);
        this._autor = autor;
        
    }


    public get autor(): string {

        return this._autor;

    }

    public set autor(autor: string) {
        
        if (!autor || autor.trim().length === 0) {
    
            console.log("Autor inválido! O nome do autor não pode ser vazio.");
            return;
    
        }

        this.autor = autor;

    }

    public visualizar(): void {

        super.visualizar();
        console.log(`📚 Autor: ${this.autor}`);

    }

}
