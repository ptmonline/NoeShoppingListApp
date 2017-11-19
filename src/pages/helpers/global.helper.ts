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
                return '#F4C9C3';
            }
            case 2: {
                return '#B2BAC2';
            }
        }
    }
}