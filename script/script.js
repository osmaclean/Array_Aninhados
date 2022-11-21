

let caixaDeSuprimentos = [

    alimentacao = ["Pão de forma", "Pão de sal", "Macarrão", "Molho de Tomate", "Salsicha"],

    higiene = ["Papel Higiênico", "Cloro", "Pasta de Dente", "Shampoo", "Sabonete"],

    farmacia = ["Dipirona", "Analgésico", "Anti-inflamatórios", "Repelente", "Antibiótico"],

    lazer = ["Uno", "Xadrez", "Baralho", "Dominó", "Binóculos"],

]

// Primeira Parte - Verificação das 4 seções
function caixaMaior(caixaDeSuprimentos) {
    let tamanho = 0
    // Looping criado para percorrer a "Caixa de Suprimentos"
    for (let i = 0; i < caixaDeSuprimentos.length; i++) {
        tamanho++
    } // Início da condição do Array maior
    if (tamanho < 4) {
        console.log(`Algum amigo ainda não retornou com itens`)
        return
    }
    if (tamanho > 4) {
        console.log(`Acho que temos um intruso`)
        return
    }

    // Segunda Parte -  Loop's e Condições / Array menor trabalhado com valores Boolean
    if (tamanho == 4) {
        let isMaiorQueCinco = false
        let isMenorQueCinco = false

        // Looping criado para percorrer e armazenar os dados do primeiro Array
        for (let i = 0; i < caixaDeSuprimentos.length; i++) {
            if (caixaDeSuprimentos[i].length > 5) {
                isMaiorQueCinco = true
            } if (caixaDeSuprimentos[i].length < 5) {
                isMenorQueCinco = true
            }
        }

        // Segundo modelo de uso para criação de Loop com For

        // for(let item in caixaDeSuprimentos) {
        //   if(item.length > 5) {
        //     isMaiorQueCinco = true
        //   }
        //   if(item.length < 5) {
        //     isMenorQueCinco = true
        //   }
        // }


        // Condição de acordo com o armazenamento do 2º looping
        if (isMaiorQueCinco) {
            console.log(`Tem itens demais, não precisamos de tantos.`)
            return
        }
        if (isMenorQueCinco) {
            console.log(`Precisamos de mais itens desta seção`)
            return
        }
        return console.log(`Podemos ir acampar`)
    }
}
caixaMaior(caixaDeSuprimentos);


