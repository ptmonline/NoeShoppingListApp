import { Component } from '@angular/core';
import { NavController, ItemSliding, NavParams } from 'ionic-angular';
import { LlistatCompraService } from '../../services/llistat.service';
import 'rxjs/add/operator/map';
import { GlobalHelper } from "../helpers/global.helper";
import { LlistatPage } from '../llistat/llistat';

@Component({
  selector: 'page-productes',
  templateUrl: 'productes.html',
  providers: [LlistatCompraService]
})
export class ProductesPage {
  public llistatInicial: any;
  public llistatCompra: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _llistatCompra: LlistatCompraService,
    private _globalHelper: GlobalHelper) {

    (this.navParams.data.length) ? this.llistatCompra = this.navParams.data : this.llistatCompra = [];  

    this._llistatCompra.getData().subscribe((data) => {
      this.llistatInicial = data;
    });

  }

  saveItem(item: ItemSliding, producta: string, titul: string, id: number) {
    let comp = { id: id, titul: titul, producta: producta };
    if (!this._globalHelper.checkUniq(comp, this.llistatCompra)) {
      this.llistatCompra.push(comp);
    }
    item.close();
  }

  toggleSection(i) {
    if (this.llistatInicial != null) {
      for(let x = 0; x < this.llistatInicial; x++){
        !this.llistatInicial.llistat[x].open
      }
      this.llistatInicial.llistat[i].open = !this.llistatInicial.llistat[i].open;
    }
  }

  done() {
    this.navCtrl.setRoot(LlistatPage, this.llistatCompra);
  }
}
