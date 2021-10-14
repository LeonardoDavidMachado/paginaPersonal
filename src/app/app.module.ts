import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { InViewportModule } from 'ng-in-viewport';

import { MaterialModule } from './material.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormacionComponent,
    ExperienciaComponent,
    ContactoComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
