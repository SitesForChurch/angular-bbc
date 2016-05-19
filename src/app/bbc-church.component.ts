import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { MinistriesComponent } from './+ministries';
import { ContactComponent } from './+contact';
import { CalendarComponent } from './+calendar';
import { BlogComponent } from './+blog';
import { SermonComponent } from './+sermon';
import { GalleryComponent } from './+gallery';
import { RadioDevotionsComponent } from './+radio-devotions';
import { WelcomeComponent } from './+welcome';
import { HomeComponent } from './+home';

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
  {path: '/ministries', component: MinistriesComponent},
  {path: '/contact', component: ContactComponent},
  {path: '/calendar', component: CalendarComponent},
  {path: '/blog', component: BlogComponent},
  {path: '/sermon', component: SermonComponent},
  {path: '/gallery', component: GalleryComponent},
  {path: '/radio-devotions', component: RadioDevotionsComponent},
  {path: '/welcome', component: WelcomeComponent},
  {path: '/', component: HomeComponent}
])
export class BbcChurchAppComponent {
}
