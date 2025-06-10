import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/colors";
import { Produto } from "../util/model/Produto";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;

    public procurarPorNumero(numero: number): void {

        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        
        } else {

            console.log(`${colors.fg.red} \n❌ O Produto numero: ${numero}  não foi encontrado. ${colors.reset}`);
    
        }    
    }

    public listarTodos(): void {
        
        this.exibirLista(this.listaProdutos);
        
    }


    public cadastrar(produto: Produto): void {

        this.listaProdutos.push(produto);
        console.log(`✅ Produto '${produto.nome}' cadastrado com sucesso!`);
    
    }

    public atualizar(produto: Produto): void {

        let buscaProduto = this.buscarNoArray(produto.numero);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`${colors.fg.greenstrong} \n✅ O Produto número: ${produto.numero} foi atualizado com sucesso! ${colors.reset}`)

        } else
            console.log(`${colors.fg.redstrong} \n❌ O Produto número: ${produto.numero} não foi encontrado! ${colors.reset}`);
    }

    public deletar(numero: number): void {

        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null) {

            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(`${colors.fg.greenstrong} \n✅ O Produto número: ${numero} foi apagado com sucesso! ${colors.reset}`);
        
        } else {

            console.log(`${colors.fg.redstrong} \n❌ O Produto número: ${numero} não foi encontrado! ${colors.reset}`);
        
        }    
    }

    /*  Novos métodos adicionados abaixo  */

    public buscarPorNome(nome: string): Produto[] {

        return this.listaProdutos.filter(produto => produto.nome.toLowerCase().includes(nome.toLocaleLowerCase()));
    }


    public buscarPorCategoria(categoria: string): Produto[] {

        return this.listaProdutos.filter(produto => produto.categoria.toLowerCase().includes(categoria.toLowerCase()));

    }    
    
    
    public adicionarAoCarrinho(numero: number, quantidade: number): void {

        let produto = this.buscarNoArray(numero);

            if (produto != null && produto.estoque >= quantidade) {
                produto.estoque -= quantidade;

                console.log(`${colors.fg.bluestrong} \n${quantidade} unidade(s) do Produto número: ${numero} foram adicionadas ao carrinho! ${colors.reset}`);
            
            } else {

                console.log(`${colors.fg.red} \nEstoque insuficiente ou produto não encontrado! ${colors.reset}`);
            
            }

    }    


    public finalizarCompra(): void {

        console.log(`${colors.fg.bluestrong} \nCompra finalizada! Obrigado por escolher o Destino Geek! ${colors.reset}`);
    
    }

    /*Métodos Auxiliares*/
    
    /*Gerar número da Produto*/ 
    public gerarNumero(): number {

        return ++ this.numero;
    
    }

    /*Checa se uma Conta existe*/
    public buscarNoArray(numero: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.numero === numero)
                return produto;
        }
        return null;
    }   

    private exibirLista(produtos: Produto[]): void {

        if (produtos.length === 0) {

            console.log(`${colors.fg.yellow} \nNenhum produto encontrado. ${colors.reset}`);
    
        } else {
        
            produtos.forEach(produto => produto.visualizar());
        }
    }
}


