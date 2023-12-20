import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent} from './services/services.component';
import { MenuComponent} from './menu/menu.component';
import { AppTastyComponent} from './app-tasty/app-tasty.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import { FooterComponent} from './footer/footer.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'app-tasty', component: AppTastyComponent },
  { path: 'contact-us', component:  ContactUsComponent },
  { path: 'footer', component:  FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
