import readlinesync from 'readline-sync';
import { colors } from './src/util/colors';
import { ProdutoController } from './src/controller/ProdutoController';
import { Produto } from './src/util/model/Produto';
import { ProdutoColecionavel } from './src/util/model/ProdutoColecionavel';
import { ProdutoLivros } from './src/util/model/ProdutoLivros';
import { ProdutoJogos } from './src/util/model/ProdutosJogos';


export function main() {

    let opcao: number;
    let numero: number;
    let categoriaIndex: number;
    let categoria: string;
    let nomeProduto: string;
    let preco: number;
    let estoque: number;
    let produtoController = new ProdutoController();

    const categorias = ["Colecionável", "Livros", "Jogos"];

    while (true) {
        console.log(colors.bg.black, colors.fg.redstrong);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                DESTINO GEEK - ECOMMERCE             ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto.                   ");
        console.log("            2 - Listar todos os Produtos.            ");
        console.log("            3 - Buscar produto por Número.           ");
        console.log("            4 - Buscar produto por Nome.             ");
        console.log("            5 - Buscar produto por Categoria.        ");
        console.log("            6 - Atualizar Produto.                   ");
        console.log("            7 - Remover Produto.                     ");
        console.log("            8 - Adicionar ao Carrinho.               ");
        console.log("            9 - Finalizar Compra.                    ");
        console.log("            0 - Sair.                                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log(colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(`${colors.fg.bluestrong} \nDestino Geek - Obrigado por sua visita! `);
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");

                console.log("Digite o Nome do Produto:");
                nomeProduto = readlinesync.question("");

                console.log("\nDigite a Categoria do Produto:");
                categoriaIndex = readlinesync.keyInSelect(categorias, "", { cancel: false });

                if (categoriaIndex === -1) {
                    console.log("Categoria inválida. Por favor, escolha uma opção válida.");
                    continue;
                }
                
                categoria = categorias[categoriaIndex];

                console.log("\nDigite o Preço do Produto (R$):");
                preco = readlinesync.questionFloat("");

                console.log("\nDigite a Quantidade em Estoque:");
                estoque = readlinesync.questionInt("");

                const numeroProduto = produtoController.gerarNumero();

                let novoProduto: Produto;

                if (categoria === "Colecionável") {

                    const edicaoEspecialRaw = readlinesync.keyInYN("É edição especial?");
                    const edicaoEspecial = (typeof edicaoEspecialRaw === "boolean") ? edicaoEspecialRaw : false;
                    novoProduto = new ProdutoColecionavel(numeroProduto, categoria, nomeProduto, preco, estoque, edicaoEspecial);

                } else if (categoria === "Livros") {

                    const autor = readlinesync.question("Digite o nome do autor: ");
                    novoProduto = new ProdutoLivros(numeroProduto, categoria, nomeProduto, preco, estoque, autor);

                } else if (categoria === "Jogos") {
        
                    const plataforma = readlinesync.question("Digite a plataforma do jogo: ");
                    novoProduto = new ProdutoJogos(numeroProduto, categoria, nomeProduto, preco, estoque, plataforma);
    
                } else {
                    
                    console.log("Categoria inválida.");
                    continue;
    
                }

                produtoController.cadastrar(novoProduto);
                console.log(`Produto '${nomeProduto}' cadastrado com sucesso!`);
                Keypress();
                break;

            case 2:
                console.log("\n\nListar Produtos\n\n");
                produtoController.listarTodos();
                break;

            case 3:
                console.log("\n\nBuscar Produto por Número\n\n");
                numero = readlinesync.questionInt("Digite o número do produto: ");
                produtoController.procurarPorNumero(numero);
                break;

            case 4:
                console.log("\n\nBuscar Produto por Nome\n\n");
                nomeProduto = readlinesync.question("Digite o nome do produto: ");
                const encontradosPorNome = produtoController.buscarPorNome(nomeProduto);

                if (encontradosPorNome.length > 0) {
                    
                    encontradosPorNome.forEach(produto => produto.visualizar());
                
                } else {
        
                    console.log(`${colors.fg.yellow}\nNenhum produto encontrado com o nome '${nomeProduto}'.${colors.reset}`);
                }
                break;

            case 5:
                console.log("\n\nBuscar Produto por Categoria\n\n");
                categoria = readlinesync.question("Digite a categoria do produto: ");
                const produtosEncontrados = produtoController.buscarPorCategoria(categoria);
                
                if (produtosEncontrados.length === 0) {
                    
                    console.log(`${colors.fg.yellow}\nNenhum produto encontrado para a categoria '${categoria}'.${colors.reset}`);
    
                } else {

                produtosEncontrados.forEach(produto => produto.visualizar());
                
                }
                break;

            case 6:
                console.log("\n\nAtualizar Produto\n\n");
                numero = readlinesync.questionInt("Digite o número do produto: ");

                let produtoExistente = produtoController.buscarNoArray(numero);

                if (produtoExistente) {

                    console.log("Digite o Nome atualizado do Produto:");
                    let nomeProdutoAtualizado = readlinesync.question("");

                    console.log("\nDigite a Categoria do Produto:");
                    categoriaIndex = readlinesync.keyInSelect(categorias, "", { cancel: false });
                    categoria = categoriaIndex !== -1 ? categorias[categoriaIndex] : produtoExistente.categoria;

                    console.log("\nDigite o Preço atualizado (R$):");
                    let precoAtualizado = readlinesync.questionFloat("");

                    console.log("\nDigite a Quantidade em Estoque:");
                    let estoqueAtualizado = readlinesync.questionInt("");

                    let produtoAtualizado: Produto;

                    if (categoria === "Colecionável") {

                        const edicaoEspecialRaw = readlinesync.keyInYN("É edição especial?");
                        const edicaoEspecial = (typeof edicaoEspecialRaw === "boolean") ? edicaoEspecialRaw : false;
                
                        produtoAtualizado = new ProdutoColecionavel(numero, categoria, nomeProdutoAtualizado, precoAtualizado, estoqueAtualizado, edicaoEspecial);
                
                    } else if (categoria === "Livros") {
                
                        const autor = readlinesync.question("Digite o nome do autor: ");
                        produtoAtualizado = new ProdutoLivros(numero, categoria, nomeProdutoAtualizado, precoAtualizado, estoqueAtualizado, autor);
                
                    } else if (categoria === "Jogos") {
                
                        const plataforma = readlinesync.question("Digite a plataforma do jogo: ");
                        produtoAtualizado = new ProdutoJogos(numero, categoria, nomeProdutoAtualizado, precoAtualizado, estoqueAtualizado, plataforma);
                
                    } else {
                
                        // categoria inválida ou outro tratamento
                        produtoAtualizado = produtoExistente; // ou apenas atualize o existente
                
                    }

                    produtoController.atualizar(produtoAtualizado);

                    console.log(`Produto número ${numero} atualizado com sucesso!`);
                    Keypress();
                
                } else {
                
                    console.log(`❌ Produto número ${numero} não encontrado.`);
                
                }

                break;

            case 7:
                console.log("\n\nRemover Produto\n\n");
                numero = readlinesync.questionInt("Digite o número do produto: ");
                produtoController.deletar(numero);
                break;

            case 8:
                console.log("\n\nAdicionar ao Carrinho\n\n");
                numero = readlinesync.questionInt("Digite o número do produto: ");
                let quantidade = readlinesync.questionInt("Digite a quantidade: ");
                produtoController.adicionarAoCarrinho(numero, quantidade);
                break;

            case 9:
                console.log("\n\nFinalizar Compra\n\n");
                produtoController.finalizarCompra();
                break;

            default:
                console.log("\n\nOpção Inválida!\n\n");
                break;
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Douglas C. Ferreira - doug_casetta@hotmail.com");
    console.log("https://github.com/dgsferreira");
    console.log("\n*****************************************************");
}

function Keypress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
