import { Component, Output, EventEmitter } from "@angular/core";
import { LlistatCompraService } from "../../services/llistat.service";

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent{
    public headers: any;

    @Output() 
    id: EventEmitter<number> = new EventEmitter<number>();


    constructor(private _llistatCompra: LlistatCompraService,){
        this._llistatCompra.getData().subscribe((data) => {
            this.headers = data;
          });
    }

    openPage(id: number){
        console.log(id)
        this.id.emit(id);
    }
    
}