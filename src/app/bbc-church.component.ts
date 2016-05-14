import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { MinistriesComponent } from './+ministries';

import { AboutComponent } from './+about';
import { NavbarComponent } from './navbar/navbar.component';
import { NgfooterComponent } from './ngfooter/ngfooter.component';

@Component({
  moduleId: module.id,
  selector: 'bbc-church-app',
  templateUrl: 'bbc-church.component.html',
  styleUrls: ['bbc-church.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, NgfooterComponent]
})
@Routes([
  {path: '/About', component: AboutComponent},
  {path: '/ministries', component: MinistriesComponent}
])
export class BbcChurchAppComponent {
  title = 'bbc-church works!';
}
