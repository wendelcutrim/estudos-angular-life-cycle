import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Item } from "src/app/interfaces/iItem";
import { ListaDeCompraService } from "src/app/service/lista-de-compra.service";

@Component({
    selector: "app-item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit, OnChanges {
    @Input() item!: Item;
    @Output() emitindoItemParaEditar: EventEmitter<Item> = new EventEmitter();
    @Output() emitindoIdParaDeletar: EventEmitter<string | number> = new EventEmitter();

    faPen = faPen;
    faTrash = faTrash;

    constructor(private service: ListaDeCompraService) {}

    ngOnInit(): void {
        console.log("OnInit");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("OnChanges");
    }

    editarItem() {
        this.emitindoItemParaEditar.emit(this.item);
    }

    checarItem() {
        this.item.comprado = !this.item.comprado;
        this.service.handleComprado(this.item);
    }

    deletarItem() {
        this.emitindoIdParaDeletar.emit(this.item.id);
    }
}
