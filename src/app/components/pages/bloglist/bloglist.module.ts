import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { BloglistRoutingModule } from './bloglist-routing.module';
import { BloglistComponent } from './bloglist.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BloglistComponent, ContentComponent],
  imports: [
    CommonModule,
    BloglistRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class BloglistModule { }
