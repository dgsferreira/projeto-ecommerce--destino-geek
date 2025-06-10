import readlinesync from 'readline-sync';
import { colors } from './src/util/colors';

export function main() {

    let opcao: number;
    let numero: number;
    let categoriaIndex: number;
    let categoria: string;
    let nomeProduto: string;
    let preco: number;
    let estoque: number;
    const categorias = ["Colecionável", "Livros", "Jogos"];

    while (true) {
        console.log(colors.bg.black, colors.fg.redstrong);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                DESTINO GEEK - ECOMMERCE             ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar produto por Número            ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Remover Produto                      ");
        console.log("            6 - Adicionar ao Carrinho                ");
        console.log("            7 - Finalizar Compra                     ");
        console.log("            8 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log(colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 8) {
            console.log(`${colors.fg.bluestrong} \nDestino Geek - Obrigado por sua visita! `);
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");

                console.log("Digite o Nome do Produto:");
                nomeProduto = readlinesync.question("");

                console.log("\nDigite a Categoria do Produto:");
                categoriaIndex = readlinesync.keyInSelect(categorias, "", {cancel: false});
                if (categoriaIndex !== -1) {
                    categoria = categorias[categoriaIndex];
                } else {
                    console.log("Categoria inválida. Por favor, escolha uma opção válida.");
                    continue;
                }

                console.log("\nDigite o Preço do Produto (R$):");
                preco = readlinesync.questionFloat("");

                console.log("\nDigite a Quantidade em Estoque:");
                estoque = readlinesync.questionInt("");

                console.log(`Produto ${nomeProduto} cadastrado com sucesso!`);
                break;

            case 2:
                console.log("\n\nListar Produtos\n\n");

                break;

            case 3:
                console.log("\n\nBuscar Produto por Número\n\n");

                break;

            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                break;

            case 5:
                console.log("\n\nRemover Produto\n\n");

                break;

            case 6:
                console.log("\n\nAdicionar ao Carrinho\n\n");

                break;

            case 7:
                console.log("\n\nFinalizar Compra\n\n");

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
