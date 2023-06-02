import { Item } from "src/app/interfaces/iItem";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ListaDeCompraService {
    private listaDeCompra: Item[];

    constructor() {
        console.log("Instanciando dependências necessárias para o serviço.");
        this.listaDeCompra = JSON.parse(localStorage.getItem("items") || "[]");
    }

    getListaDeCompra() {
        return this.listaDeCompra;
    }

    setListaDeCompra(form: string) {
        const item = this.criarItem(form);
        this.listaDeCompra.push(item);

        const listaJson = JSON.stringify(this.listaDeCompra);
        localStorage.setItem("items", listaJson);
    }

    criarItem(nome: string) {
        const id = this.listaDeCompra.length + 1;
        const item: Item = {
            id,
            nome,
            data: new Date().toLocaleString("pt-BR"),
            comprado: false,
        };
        console.log(id, item);

        return item;
    }

    editar(itemAntigo: Item, nome: string) {
        const item = itemAntigo && this.listaDeCompra.find((item) => item.id === itemAntigo.id);
        const index = this.listaDeCompra.findIndex((item) => item.id === itemAntigo.id);

        if (item) {
            item.nome = nome;
            item.data = new Date().toLocaleString("pt-BR");
            this.listaDeCompra[index] = item;
            const listaJson = JSON.stringify(this.listaDeCompra);
            localStorage.setItem("items", listaJson);
        }
    }
}
