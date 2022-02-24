import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregasComponent } from './entregas.component';
import { DealsComponent } from './forms/deals/deals.component';
import { DetpiComponent } from './forms/detpi/detpi.component';
import { SimulacoesComponent } from './forms/simulacoes/simulacoes.component';


const routes:Routes =[
	{path:'',component: EntregasComponent},
	{path:'detpi', component: DetpiComponent},
	{path:'deals', component: DealsComponent},
	{path:'simulacoes', component: SimulacoesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregasRoutingModule { }
