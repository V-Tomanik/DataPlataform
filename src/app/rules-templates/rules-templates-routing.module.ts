import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesTemplatesComponent } from './rules-templates.component';

const routes:Routes =[
	{path:'',component: RulesTemplatesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesTemplatesRoutingModule { }
