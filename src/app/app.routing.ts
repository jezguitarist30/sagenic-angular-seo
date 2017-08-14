import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule'
    },
    {
        path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule'
    },
    {
        path: 'our-service', loadChildren: './our-service/our-service.module#OurServiceModule'
    },
    {
        path: '**', component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

