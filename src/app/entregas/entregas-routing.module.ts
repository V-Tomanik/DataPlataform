import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregaComponent } from './entrega/entrega.component';
import { EntregasComponent } from './entregas.component';


const routes:Routes =[
	{path:'',component: EntregasComponent},
	{path:':id', component: EntregaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregasRoutingModule { }
