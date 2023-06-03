import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";
import { Item } from "./interfaces/iItem";
import { ListaDeCompraService } from "./service/lista-de-compra.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy, DoCheck {
    title = "app-lista-de-compras";
    listaDeCompras!: Array<Item>;
    itemParaSerEditado!: Item;

    constructor(private listaService: ListaDeCompraService) {}

    ngOnInit(): void {
        this.listaDeCompras = this.listaService.getListaDeCompra();
        console.log(this.listaDeCompras);
        console.log(location);
    }

    ngDoCheck(): void {
        console.log("doCheck chamado");
    }

    ngOnDestroy(): void {
        console.log("Deletado, onDestroy");
    }

    editarItem(item: Item) {
        this.itemParaSerEditado = item;
    }

    deletarItem(id: string | number) {
        this.listaService.deletar(id);
    }

    limparLista() {
        this.listaService.limparLista();
        location.reload();
    }
}
