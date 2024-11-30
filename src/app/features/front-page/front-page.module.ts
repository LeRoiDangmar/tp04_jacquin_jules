import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';
import { FeaturedComponent } from './featured/featured.component';


@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    FrontPageComponent,
    FeaturedComponent,
  ],
})
export class FrontPageModule { }
