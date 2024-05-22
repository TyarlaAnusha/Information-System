import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrganicComponent } from './organic/organic.component';
import { InorganicComponent } from './inorganic/inorganic.component';
import { SupportComponent } from './support/support.component';
import { ItypesComponent } from './itypes/itypes.component';
import { OtypesComponent } from './otypes/otypes.component';

import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OrganicComponent,
    InorganicComponent,
    SupportComponent,
    ItypesComponent,
    OtypesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
