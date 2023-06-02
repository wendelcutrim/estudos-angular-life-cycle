import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Item } from "src/app/interfaces/iItem";
import { ListaDeCompraService } from "src/app/service/lista-de-compra.service";

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit, OnChanges {
    @Input() itemQueVaiSerEditado!: Item;

    item: string = "";
    editando: boolean = false;
    textoBtn: string = "Salvar Item";

    constructor(private listaService: ListaDeCompraService) {}

    @ViewChild("itemInput") input!: ElementRef; //Capturando a variável de template #itemInput para setar o focus.

    ngOnInit(): void {
        this.textoBtn = "Salver Item";
        console.log(this.editando);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes["itemQueVaiSerEditado"].currentValue);

        if (changes["itemQueVaiSerEditado"].currentValue) {
            this.editando = true;
            this.textoBtn = "Editar Item";
            this.item = this.itemQueVaiSerEditado?.nome;
        }
    }

    adicionarItem() {
        this.listaService.setListaDeCompra(this.item);
        this.item = "";
        this.input.nativeElement.focus(); //Setando o focus após enviar
    }

    editarItem() {
        this.listaService.editar(this.itemQueVaiSerEditado, this.item);
        this.textoBtn = "Salvar Item";
        this.editando = false;
        this.item = "";
    }
}
