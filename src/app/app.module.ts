import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { HomeComponent } from './home/home.component';
import { HeaderMenuListComponent } from './header/header-menu-list/header-menu-list.component';
import { EntregasModule } from './entregas/entregas.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarioComponent,
    HomeComponent,
    HeaderMenuListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		MaterialModule,
    BrowserAnimationsModule,
		ReactiveFormsModule,
		EntregasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
