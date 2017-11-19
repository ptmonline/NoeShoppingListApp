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
  public llistatCompra = [];

  constructor(public navCtrl: NavController, private _llistatCompra: LlistatCompraService){
    this._llistatCompra.getData().subscribe((data)=>{
      this.llistatInicial = data;
    })
  }

  saveItem(item: ItemSliding, producta: string, titul: string){
    let comp = {titul: titul, producta: producta};
    (this.llistatCompra.indexOf(comp.producta) === -1) ? this.llistatCompra.push(comp):console.log('NOPE');
    console.log(this.llistatCompra);
    item.close();
  }

  toggleSection(i) {
    if(this.llistatInicial != null){
      this.llistatInicial.llistat[i].open = !this.llistatInicial.llistat[i].open;
    }
    
  }
}
