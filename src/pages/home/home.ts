import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { LlistatCompraService } from '../../services/llistat.service';
import 'rxjs/add/operator/map';
import { GlobalHelper } from "../helpers/global.helper";
import { ContactPage } from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LlistatCompraService]
})
export class HomePage {
  public llistatInicial: any;
  public llistatCompra = [];

  constructor(
    public navCtrl: NavController,
    private _llistatCompra: LlistatCompraService,
    private _globalHelper: GlobalHelper) {
    this._llistatCompra.getData().subscribe((data) => {
      this.llistatInicial = data;
    })
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
      this.llistatInicial.llistat[i].open = !this.llistatInicial.llistat[i].open;
    }

  }

  done() {
    this.navCtrl.push(ContactPage, this.llistatCompra);
  }
}
