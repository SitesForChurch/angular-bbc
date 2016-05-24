import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SermonService {
   constructor(public http: Http) { }

   getSermonsList() {
     return this.http.get('/api/sermons')
     .map(res => res.json());
   }

}
