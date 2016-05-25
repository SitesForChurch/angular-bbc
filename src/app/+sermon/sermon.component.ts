import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SermonService } from './sermon.service'
import {DateObj} from "../pipes/date-obj.pipe";
import {Elipsis} from "../pipes/elipsis.pipe";

@Component({
  moduleId: module.id,
  selector: 'bbc-sermon',
  templateUrl: 'sermon.component.html',
  styleUrls: ['sermon.component.css'],
  providers: [HTTP_PROVIDERS, SermonService],
  pipes: [DateObj, Elipsis]
})
export class SermonComponent implements OnInit {
  date: Date;

  sermons = [];
    constructor(
      public http: Http,
      private _sermonService: SermonService) {
      this.date = new Date("2014-07-20");
    }
  

  ngOnInit() {
    this.sermons = [];
    this.getSermonsList();
  }

  getSermonsList() {
    this._sermonService.getSermonsList()
      .subscribe(sermons => this.sermons = sermons);
  }
}
