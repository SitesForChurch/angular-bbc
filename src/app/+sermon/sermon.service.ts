import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SermonService {
   constructor(public http: Http) { }
   
   getSermonsList() {
     return this.http.get('https://api.airtable.com/v0/apprDNNyNO4RHDP1q/Sermons?api_key=keyRTLlrVS02vC3Vx')
     .map(res => res.json());
   }

}
