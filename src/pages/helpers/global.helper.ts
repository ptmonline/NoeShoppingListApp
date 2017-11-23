import { Injectable } from "@angular/core";

@Injectable()

export class GlobalHelper {

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
                return 'rgba(205,211,153,0.5)';
            }
            case 2: {
                return 'rgba(211,159,153,0.5)';
            }
            case 3: {
                return 'rgba(178,223,219,0.5)';
            }
            case 4: {
                return 'rgba(224,242,241,0.5)';
            }
            case 5: {
                return 'rgba(38,166,154,0.5)';
            }
            case 6: {
                return 'rgba(0,150,136,0.5)';
            }
            case 7: {
                return 'rgba(167,255,235,0.5)';
            }
            case 8: {
                return 'rgba(100,255,218,0.5)';
            }
            case 9: {
                return 'rgba(144,202,249,0.5)';
            }
            case 10: {
                return 'rgba(187,222,251,0.5)';
            }
            case 11: {
                return 'rgba(130,177,255,0.5)';
            }
            case 12: {
                return 'rgba(178,235,242,0.5)';
            }
            case 13: {
                return 'rgba(0,188,212,0.5)';
            }
            case 14: {
                return 'rgba(255,204,128,0.5)';
            }
            case 15: {
                return 'rgba(188,170,164,0.5)';
            }
            case 16: {
                return 'rgba(161,136,127,0.5)';
            }
            case 17: {
                return 'rgba(255,171,145,0.5)';
            }
            case 18: {
                return 'rgba(255,205,210,0.5)';
            }
            case 19: {
                return 'rgba(248,187,208,0.5)';
            }
        }
    }
}