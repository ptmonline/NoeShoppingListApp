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
}