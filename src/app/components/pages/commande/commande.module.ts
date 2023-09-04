import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountdownModule } from 'ngx-countdown';
import { NgMasonryGridModule } from 'ng-masonry-grid';


import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'
import { NgxPaginationModule } from 'ngx-pagination';


// import { MatToolbarModule } from '@angular/material/toolbar';
// import {  MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule} from '@angular/material/menu';

const commonModules = [

];
@NgModule({
  declarations: [CommandeComponent,ContentComponent],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    CommonModule,
    SlickCarouselModule,
    NgbModule,
    CountdownModule,
    NgxPaginationModule,
    NgMasonryGridModule,
    SharedModule
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule,
    // MatProgressSpinnerModule,
    // MatSidenavModule,
    // MatListModule,
    // MatMenuModule,

  ]
})
export class CommandeModule { }
