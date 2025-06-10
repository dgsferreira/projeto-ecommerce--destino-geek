import { Produto } from "../util/model/Produto";

export interface ProdutoRepository {

    //CRUD dos Produtos
    
    procurarPorNumero(numero: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(numero: number): void;


    
    // Métodos de busca adicionais

    buscarPorNome(nome: string): Produto | null;
    buscarPorCategoria(categoria: string): Produto[];
}