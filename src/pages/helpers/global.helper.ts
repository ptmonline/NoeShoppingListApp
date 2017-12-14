import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()

export class GlobalHelper {

    constructor(public loadingCtrl: LoadingController){}

    checkUniq(obj, list) {
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i].producta === obj.producta) {
                return true;
            }
        }
        return false;
    }

    removeItem(obj, list) {
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i].producta === obj.producta) {
                list.splice(i, 1);
                return list
            }
        }
    }

    getColor(id) {
        switch (id) {
            case 1: {
                return 'rgba(0,165,114,0.5)';
            }
            case 2: {
                return 'rgba(46,139,87,0.5)';
            }
            case 3: {
                return 'rgba(178,223,219,0.5)';
            }
            case 4: {
                return 'rgba(152,251,152,0.5)';
            }
            case 5: {
                return 'rgba(38,166,154,0.5)';
            }
            case 6: {
                return 'rgba(63,122,77,0.5)';
            }
            case 7: {
                return 'rgba(167,255,235,0.5)';
            }
            case 8: {
                return 'rgba(100,255,218,0.5)';
            }
            case 9: {
                return 'rgba(0,78,56,0.5)';
            }
            case 10: {
                return 'rgba(80,220,11,0.5)';
            }
            case 11: {
                return 'rgba(57,255,20,0.5)';
            }
            case 12: {
                return 'rgba(1,121,111,0.5)';
            }
            case 13: {
                return 'rgba(103,146,103,0.5)';
            }
            case 14: {
                return 'rgba(11,102,35,0.5)';
            }
            case 15: {
                return 'rgba(41,171,135,0.5)';
            }
            case 16: {
                return 'rgba(138,154,91,0.5)';
            }
            case 17: {
                return 'rgba(199,234,70,0.5)';
            }
            case 18: {
                return 'rgba(208,240,192,0.5)';
            }
            case 19: {
                return 'rgba(75,83,32,0.5)';
            }
        }
    }
    presentLoadingCustom() {
        let loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          content: 'guardant',
          cssClass: 'llistat__spinner',
          showBackdrop: false,
          duration: 1000
        });
      
        loading.onDidDismiss(() => {
          console.log('Dismissed loading');
        });
      
        loading.present();
      }
}