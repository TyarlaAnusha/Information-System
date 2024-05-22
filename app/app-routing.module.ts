import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrganicComponent } from './organic/organic.component';
import { OtypesComponent } from './otypes/otypes.component';
import { InorganicComponent } from './inorganic/inorganic.component';
import { ItypesComponent } from './itypes/itypes.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'organic',component:OrganicComponent},
  {path:'otypes',component:OtypesComponent},
  {path:'inorganic',component:InorganicComponent},
  {path:'itypes',component:ItypesComponent},
  {path:'support',component:SupportComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
