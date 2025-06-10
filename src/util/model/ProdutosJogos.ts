import { Produto } from "./Produto";

export class ProdutoJogos extends Produto {

    private _plataforma: string;

    constructor(numero: number, categoria: string, nome: string, preco: number, estoque: number, plataforma: string) {
        
        super(numero, categoria, nome, preco, estoque);
        this._plataforma = plataforma;

    }

    public get plataforma(): string {

        return this._plataforma;

    }

    public set plataforma(plataforma: string) {

        if (!plataforma || plataforma.trim().length === 0) {

            console.log("Plataforma inválida! O nome da plataforma não pode ser vazio.");
            return;

        }
    
        this.plataforma = plataforma;

    }

    public visualizar(): void {

        super.visualizar();
        console.log(`🎮 Plataforma: ${this.plataforma}`);

    }

}
