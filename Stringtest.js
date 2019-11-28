/*********************************
   TESTE DE STRING EM TYPESCRIPT
**********************************/
// Classe Principal
var Stringtest = /** @class */ (function () {
    // Construtor (Constructor)
    function Stringtest() {
        this.nome = "gabriel.stundner";
        this.str = this.nome.replace('.', '');
    }
    return Stringtest;
}());
var saida = new Stringtest();
console.log(saida.str);
