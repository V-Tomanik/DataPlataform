import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { EntregasRoutingModule } from './entregas/entregas-routing.module';
import { HomeComponent } from './home/home.component';

//Rotas do aplicativo
const routes: Routes = [
	{path:'home', component:HomeComponent},
	{path:'',redirectTo: '/home', pathMatch:'full'},
	{path:'entregas', loadChildren:() => EntregasRoutingModule},
	{path:'calendario',component: CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
