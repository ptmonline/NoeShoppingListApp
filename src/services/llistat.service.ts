import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LlistatCompraService {
  constructor(private http: HttpClient) {
   }

   getData(): Observable<any>{
    return this.http.get('../assets/json/data.json').map(data=>{
      return data;
    });
   }
}