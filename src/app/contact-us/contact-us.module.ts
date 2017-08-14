import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ContactUsRoutingModule } from './contact-us-routing.module';

import { ContactUsComponent } from './contact-us.component';

import { ContactUsService } from './contact-us.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ContactUsRoutingModule
  ],
  declarations: [ContactUsComponent],
  providers: [ContactUsService]
})
export class ContactUsModule { }
