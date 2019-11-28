/*********************************
   TESTE DE STRING EM TYPESCRIPT
**********************************/

// Classe Principal
class Stringtest {
    // Definição das Variáveis
    nome: string
    str: string

    // Construtor (Constructor)
    constructor(){
        this.nome = "gabriel.stundner"
        this.str = this.nome.replace('.','')
    }

}

var saida = new Stringtest();
console.log(saida.str)