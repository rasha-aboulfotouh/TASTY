import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppTastyComponent } from './app-tasty/app-tasty.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    MenuComponent,
    ContactUsComponent,
    AppTastyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
