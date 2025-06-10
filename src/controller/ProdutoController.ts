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

            console.log(`${colors.fg.red} \nO Produto numero: ${numero}  não foi encontrado. ${colors.reset}`);
    
        }    
    }

    public listarTodos(): void {

        if (this.listaProdutos.length === 0) {

            console.log(`${colors.fg.yellow} \nNenhum produto cadastrado no momento. ${colors.reset}`);
    
        } else {
    
            this.listaProdutos.forEach(produto => produto.visualizar());
    
        }   
    }


    public cadastrar(produto: Produto): void {

        this.listaProdutos.push(produto);
        console.log(`${colors.fg.bluestrong} "\nO Produto número: ${produto.numero} foi criado com sucesso! ${colors.reset}`);
    
    }

    public atualizar(produto: Produto): void {

        let buscaProduto = this.buscarNoArray(produto.numero);

        if (buscaProduto != null) {

            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`${colors.fg.bluestrong} \nO Produto número: ${produto.numero} foi atualizado com sucesso! ${colors.reset}`)

        } else {

            console.log(`${colors.fg.bluestrong} \nO Produto número: ${produto.numero} não foi encontrada! ${colors.reset}`);
        
        }
    
        }

    public deletar(numero: number): void {

        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null) {

            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(`${colors.fg.bluestrong} \nO Produto número: ${numero} foi apagado com sucesso! ${colors.reset}`);
        
        } else {

            console.log(`${colors.fg.bluestrong} \nO Produto número: ${numero} não foi encontrado! ${colors.reset}`);
        
        }    
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

    /*Checa se uma Produto existe*/
    public buscarNoArray(numero: number): Produto | null {

        return this.listaProdutos.find(produto => produto.numero === numero) || null;
    
    }

}
