class Plato{
    codigo: number
    nombre: string
    kcal: number
}

class Primero extends Plato{}
class Segundo extends Plato{}
class Postre extends Plato{}
class Especial extends Plato{
    suplemento : number
}

export{ Plato, Primero, Segundo, Postre, Especial }