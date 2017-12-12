import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding } from 'ionic-angular';
import _ from "lodash";
import { GlobalHelper } from "../helpers/global.helper";
import { ProductesPage } from '../productes/productes';
import { StorageApp } from '../helpers/storage.helper';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-llistat',
  templateUrl: 'llistat.html'
})
export class LlistatPage {
  compraLlistat: any;
  colorcolumn: string;
  active: boolean;
  archiveDate: any;
  nomLlistat: string;
  nomguardat: string;

  private static stored_archiu: string = 'stored_archiu';
  private static stored_nomllistat: string = 'stored_nomllistat';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _globalHelper: GlobalHelper,
    public alertCtrl: AlertController) {

    this.nomguardat = StorageApp.get(LlistatPage.stored_nomllistat);

    if (this.nomguardat != null) {
      this.nomLlistat = this.nomguardat;
    }

    this.compraLlistat = _.orderBy(this.navParams.data, 'id');
    (this.compraLlistat.length) ? this.active = true : this.active = false;
  }

  deleteItem(item: ItemSliding, producta: string, titul: string, id: number) {
    let comp = { id: id, titul: titul, producta: producta };
    this.compraLlistat = this._globalHelper.removeItem(comp, this.compraLlistat);
    item.close();
  }

  back() {
    this.navCtrl.setRoot(ProductesPage, this.compraLlistat);
  }

  close() {
    this.active = false;
    this.compraLlistat = [];
    this.nomguardat = '';
    StorageApp.set(LlistatPage.stored_archiu, this.compraLlistat);
    StorageApp.set(LlistatPage.stored_nomllistat, this.nomguardat);
    this.back();
  }

  archivar() {
    if (this.nomguardat == null || this.nomguardat == '') {
      let alert = this.alertCtrl.create({
        title: 'nom llistat',
        inputs: [{
          name: 'nom',
          placeholder: 'nom del llistat'
        }],
        buttons: [{
          text: 'Guardar',
          handler: data => {
            this.nomLlistat = data;
            StorageApp.set(LlistatPage.stored_nomllistat, this.nomLlistat);
            this._globalHelper.presentLoadingCustom();
            console.log(this.nomLlistat);
          }
        }, {
          text: 'Cancelar'
        }]
      });
      alert.present();
    }
    // this.archiveDate = new Date();
    // this.archiveDate = this.archiveDate.toDateString();
    // StorageApp.set(LlistatPage.stored_nomllistat, this.nomLlistat);
    StorageApp.set(LlistatPage.stored_archiu, this.compraLlistat);
  }

}
