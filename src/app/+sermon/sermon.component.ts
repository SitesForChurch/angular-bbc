import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SermonService } from './sermon.service'

@Component({
  moduleId: module.id,
  selector: 'bbc-sermon',
  templateUrl: 'sermon.component.html',
  styleUrls: ['sermon.component.css'],
  providers: [HTTP_PROVIDERS, SermonService],
})
export class SermonComponent implements OnInit {
  sermons = [];
    constructor(
      public http: Http,
      private _sermonService: SermonService) { }

  ngOnInit() {
    this.sermons = [];
    this.getSermonsList();
  }
  
  getSermonsList() {    
    this._sermonService.getSermonsList()
      .subscribe(sermons => this.sermons = sermons);
  }
}
