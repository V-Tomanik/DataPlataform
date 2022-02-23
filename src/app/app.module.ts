import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { EntregasComponent } from './entregas/entregas.component';
import { HeaderComponent } from './header/header.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { HomeComponent } from './home/home.component';
import { HeaderMenuListComponent } from './header/header-menu-list/header-menu-list.component';
import { EntregaComponent } from './entregas/entrega/entrega.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EntregasComponent,
    HeaderComponent,
    CalendarioComponent,
    HomeComponent,
    HeaderMenuListComponent,
    EntregaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		MaterialModule,
    BrowserAnimationsModule,
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
