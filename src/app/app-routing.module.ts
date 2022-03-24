import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactComponent } from './contact/contact.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { ServicepageComponent } from './servicepage/servicepage.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'search/:searchItem', component:HomeComponent},
  { path:'tag/:tag', component:HomeComponent},
  { path:'food/:id', component:FoodpageComponent},
  { path:'cart-page', component:CartPageComponent},
  { path:'service', component:ServicepageComponent},
  { path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
