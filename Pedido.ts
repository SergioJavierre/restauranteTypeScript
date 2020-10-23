import { Cliente } from "./Cliente"
import { Plato } from "./Platos"

class Pedido{
    precioFinal: number
    platos: Array<Plato> = []
    cliente: Cliente
}

export{ Pedido }