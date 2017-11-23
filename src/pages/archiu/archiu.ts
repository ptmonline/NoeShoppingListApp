import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { StorageApp } from "../helpers/storage.helper";

@Component({
    selector: 'archiu-page',
    templateUrl: 'archiu.html'
})

export class ArchiuComponent {
    private static stored_archiu: string = 'stored_archiu';
    public archiuList = [];
    constructor(public navParams: NavParams) {
        console.log(this.navParams.data);
        let storedarchiu = StorageApp.get(ArchiuComponent.stored_archiu);
        if(storedarchiu != null){
            this.archiuList = storedarchiu;
        }
     }
}