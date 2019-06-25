class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
var entregado = [];
caja.push( new Billete(50,3));
caja.push( new Billete(20,2));
caja.push( new Billete(10,2));

var dinero = 210;
var div = 0;
var efectivo = 0;

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);