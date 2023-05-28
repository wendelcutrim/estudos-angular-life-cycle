import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ListaDeCompraService } from "src/app/service/lista-de-compra.service";

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
    item: string = "";

    constructor(private listaService: ListaDeCompraService) {}
    @ViewChild("itemInput") input!: ElementRef; //Capturando a variável de template #itemInput para setar o focus.

    ngOnInit(): void {}

    adicionarItem() {
        this.listaService.setListaDeCompra(this.item);
        this.item = "";
        this.input.nativeElement.focus(); //Setando o focus após enviar
    }
}
