import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { EntregasComponent } from './entregas/entregas.component';
import { HomeComponent } from './home/home.component';

//Rotas do aplicativo
const routes: Routes = [
	{path:'home', component:HomeComponent},
	{path:'',redirectTo: '/home', pathMatch:'full'},
	{path:'entregas',component: EntregasComponent},
	{path:'calendario',component: CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
