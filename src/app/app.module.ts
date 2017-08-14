import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app.routing';
import { NavigationModule } from './shared/navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { OurServiceModule } from './our-service/our-service.module';
import { ContactUsModule } from './contact-us/contact-us.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'sagenic-angular-seo' }),
    NavigationModule,
    HomeModule,
    AboutUsModule,
    OurServiceModule,
    ContactUsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
