import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { EntregasRoutingModule } from './entregas/entregas-routing.module';
import { HomeComponent } from './home/home.component';
import { RulesTemplatesRoutingModule} from './rules-templates/rules-templates-routing.module';

//Rotas do aplicativo
const routes: Routes = [
	{path:'home', component:HomeComponent},
	{path:'',redirectTo: '/home', pathMatch:'full'},
	{path:'entregas', loadChildren:() => EntregasRoutingModule},
	{path:'templates', loadChildren:() => RulesTemplatesRoutingModule},
	{path:'calendario',component: CalendarioComponent},

//	{path:'**',component: CalendarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
