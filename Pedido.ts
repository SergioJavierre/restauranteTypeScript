import { Cliente } from "./Cliente"
import { Especial, Plato, Postre, Primero, Segundo } from "./Platos"

class Pedido{
    precioFinal: number = 12
    platos: Array<Plato> = []
    cliente: Cliente

    eleccion(){
        for(let plato of this.platos){
            if(plato instanceof Primero){
                console.log("Como primero:")
            }
            else if(plato instanceof Segundo){
                console.log("Como segundo:")
            }
            else if(plato instanceof Postre){
                console.log("Como postre:")
            }
            else if(plato instanceof Especial){
                console.log("Como especial:")
                this.precioFinal = this.precioFinal + plato.suplemento
            }
            console.log(plato.nombre)
        }
        console.log("Coste final: "+this.precioFinal)
    }
}

export{ Pedido }