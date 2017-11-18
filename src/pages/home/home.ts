import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { LlistatCompraService } from '../../services/llistat.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LlistatCompraService]
})
export class HomePage {
  public llistatInicial: any;
  public llistatCompra: string[] = [];

  constructor(public navCtrl: NavController, private _llistatCompra: LlistatCompraService){
    this._llistatCompra.getData().subscribe((data)=>{
      this.llistatInicial = data;
    })
  }

  saveItem(item: ItemSliding, fruita: string){
    console.log(fruita);
    (this.llistatCompra.indexOf(fruita) === -1) ? this.llistatCompra.push(fruita):console.log('NOPE');
    console.log(this.llistatCompra);
    item.close();
  }

  toggleSection(i) {
    if(this.llistatInicial != null){
      this.llistatInicial.llistat[i].open = !this.llistatInicial.llistat[i].open;
    }
    
  }
}
