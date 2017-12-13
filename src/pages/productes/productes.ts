import { Component } from '@angular/core';
import { NavController, ItemSliding, NavParams, AlertController } from 'ionic-angular';
import { LlistatCompraService } from '../../services/llistat.service';
import 'rxjs/add/operator/map';
import { GlobalHelper } from "../helpers/global.helper";
import { LlistatPage } from '../llistat/llistat';
import { StorageApp } from '../helpers/storage.helper';

@Component({
  selector: 'page-productes',
  templateUrl: 'productes.html',
  providers: [LlistatCompraService]
})

export class ProductesPage {
  public llistatInicial: any;
  public llistatCompra: any[];

  private static stored_archiu: string = 'stored_archiu';
  private static stored_nomllistat: string = 'stored_nomllistat';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _llistatCompra: LlistatCompraService,
    public alertCtrl: AlertController,
    private _globalHelper: GlobalHelper) {

    (this.navParams.data.length) ? this.llistatCompra = this.navParams.data : this.llistatCompra = [];

    let stored_data = StorageApp.get(ProductesPage.stored_archiu);
    if (stored_data != null && stored_data.length && !this.llistatCompra.length) this.getListQuestion();

    this._llistatCompra.getData().subscribe((data) => {
      this.llistatInicial = data;
    });

  }

  getListQuestion() {
    let alert = this.alertCtrl.create({
      title: 'ARXIU',
      message: 'Vols recuperar el llistat guardat?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            StorageApp.set(ProductesPage.stored_archiu, '');
            StorageApp.set(ProductesPage.stored_nomllistat, '');
            this.llistatCompra = [];
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.llistatCompra = StorageApp.get(ProductesPage.stored_archiu);
            this.navCtrl.setRoot(LlistatPage, this.llistatCompra);
          }
        }
      ]
    });
    alert.present();
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
      for (let x = 0; x < this.llistatInicial.llistat.length; x++) {
        if (x != i) {
          this.llistatInicial.llistat[x].open = false;
        }
      }
      this.llistatInicial.llistat[i].open = !this.llistatInicial.llistat[i].open;
    }
  }

  done() {
    this.navCtrl.setRoot(LlistatPage, this.llistatCompra);
  }
}
