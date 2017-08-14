import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServiceRoutingModule } from './our-service-routing.module';

import { OurServiceComponent } from './our-service.component';

@NgModule({
  imports: [
    CommonModule,
    OurServiceRoutingModule
  ],
  declarations: [OurServiceComponent]
})
export class OurServiceModule { }
