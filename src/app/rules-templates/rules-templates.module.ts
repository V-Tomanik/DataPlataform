import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../shared/material/material.module";
import { RulesTemplatesComponent } from './rules-templates.component';
import { RulesTemplatesRoutingModule } from './rules-templates-routing.module';

@NgModule({
  imports: [
    CommonModule,
		MaterialModule,
		RulesTemplatesRoutingModule
  ],
	declarations:[
	RulesTemplatesComponent	
	]
})
export class RulesTemplatesModule { }
