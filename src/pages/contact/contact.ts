import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import _ from "lodash";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  compraLlistat: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.compraLlistat = _.orderBy(this.navParams.data, 'id');
    console.log(this.compraLlistat )
  }

}
