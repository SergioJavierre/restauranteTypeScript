import { Cliente } from "./Cliente";
import { Menu } from "./Menu";
import { Pedido } from "./Pedido";
import { Especial, Postre, Primero, Segundo } from "./Platos";

let menu = new Menu()

let ensalada = new Primero()
ensalada.nombre = "Ensalada"
let macarrones = new Primero()
macarrones.nombre = "Macarrones"

let cordero = new Segundo()
cordero.nombre = "Cordero"
let merluza = new Segundo()
merluza.nombre = "Merluza"

let helado = new Postre()
helado.nombre = "Helado"
let flan = new Postre()
flan.nombre = "Flan"

let entrecot = new Especial()
entrecot.nombre = "Entrecot"

menu.primeros = [ensalada, macarrones]
menu.segundos = [cordero, merluza]
menu.postres = [helado, flan]
menu.especiales = [entrecot]

let cliente = new Cliente()
cliente.nombre = "Sergio"

let pedido = new Pedido()
pedido.cliente = cliente
pedido.platos = [ensalada, entrecot, flan]

