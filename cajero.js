class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}
function entregarDinero(){
    for (const bi of caja) 
    {
        if(dinero > 0){
            div = Math.floor(dinero/bi.valor);
            if(div > bi.cantidad){
                efectivo = bi.cantidad;
            }else{
                efectivo = div;
            }

            entregado.push(new Billete(bi.valor, efectivo));
            dinero = dinero-(bi.valor * efectivo);
        }
        
    }

    if(dinero > 0){
        console.log("estoy tirado")();
    }
    else{
        for(var e of entregado){
            document.write(e.cantidad+ " billetes de $" + e.valor);
        }
    }
}
var caja = [];
var entregado = [];
caja.push( new Billete(50,30));
caja.push( new Billete(20,20));
caja.push( new Billete(10,20));

var dinero;
var div = 0;
var efectivo = 0;

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);