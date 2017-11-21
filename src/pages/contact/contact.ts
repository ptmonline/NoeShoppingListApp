import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding } from 'ionic-angular';
import _ from "lodash";
import { GlobalHelper } from "../helpers/global.helper";
import { HomePage } from '../home/home';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  compraLlistat: any;
  colorcolumn: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _globalHelper: GlobalHelper) {

    this.compraLlistat = _.orderBy(this.navParams.data, 'id');
  }

  deleteItem(item: ItemSliding, producta: string, titul: string, id: number) {
    let comp = { id: id, titul: titul, producta: producta };
    this.compraLlistat = this._globalHelper.removeItem(comp, this.compraLlistat);
    item.close();
  }

  back() {
    this.navCtrl.setRoot(HomePage, this.compraLlistat);
  }

}
