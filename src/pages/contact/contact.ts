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
  constructor(public navCtrl: NavController, public navParams: NavParams, public _globalHelper: GlobalHelper, private _homePage: HomePage) {
    this.compraLlistat = _.orderBy(this.navParams.data, 'id');
    console.log(this.compraLlistat)
  }

  deleteItem(item: ItemSliding, producta: string, titul: string, id: number) {
    let comp = { id: id, titul: titul, producta: producta };
    this._homePage.llistatCompra = this._globalHelper.removeItem(comp, this.compraLlistat)
    console.log(this._homePage.llistatCompra)
    item.close();
  }

}
