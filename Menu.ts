import { Especial, Postre, Primero, Segundo } from "./Platos"

class Menu{

    precio: number

    primeros: Array<Primero> = []
    segundos: Array<Segundo> = []
    postres: Array<Postre> = []
    especiales: Array<Especial> = []
     
}

export{Menu}