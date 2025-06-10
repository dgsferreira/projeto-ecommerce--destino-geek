import { Produto } from "./Produto";

export class ProdutoColecionavel extends Produto {
    
    private _edicaoEspecial: boolean;

    constructor(numero: number,  categoria: string, nome: string, preco: number, estoque: number, edicaoEspecial: boolean) {
        
        super(numero,  categoria, nome, preco, estoque);
        this._edicaoEspecial = edicaoEspecial;

    }

    public get edicaoEspecial(): boolean {

        return this._edicaoEspecial;

    }

    public set edicaoEspecial(edicaoEspecial: boolean) {

        if (typeof edicaoEspecial !== "boolean") {

            console.log("Valor inválido para edição especial! Deve ser verdadeiro ou falso.");
            return;

        }

        this.edicaoEspecial = edicaoEspecial;
        
    }

    public visualizar(): void {
        
        super.visualizar();
        console.log(`Edição Especial: ${this._edicaoEspecial ? "Sim ✅" : "Não ❌"}`);
    
    }
}
