import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding } from 'ionic-angular';
import _ from "lodash";
import { GlobalHelper } from "../helpers/global.helper";
import { ProductesPage } from '../productes/productes';
import { ArchiuComponent } from '../archiu/archiu';



@Component({
  selector: 'page-llistat',
  templateUrl: 'llistat.html'
})
export class LlistatPage {
  compraLlistat: any;
  colorcolumn: string;
  active: boolean;
  archiveDate: any;

  private static stored_archiu: string = 'stored_archiu';

  constructor(public navCtrl: NavController, public navParams: NavParams, public _globalHelper: GlobalHelper) {
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
    this.back();
  }

  archivar(){
    this.archiveDate = new Date;
    this.archiveDate = this.archiveDate.toDateString();
    // StorageApp.set(ArchiuComponent.stored_archiu);
    console.log(this.archiveDate);
  }

  archiu(){
    this.navCtrl.push(ArchiuComponent, {llistat: this.compraLlistat, data: this.archiveDate});
  }

}
