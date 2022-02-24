import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EntregasRoutingModule } from "./entregas-routing.module";
import { MaterialModule } from "../material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { EntregasComponent } from "./entregas.component";
import { DetpiComponent } from './forms/detpi/detpi.component';
import { SimulacoesComponent } from './forms/simulacoes/simulacoes.component';
import { DealsComponent } from './forms/deals/deals.component';


@NgModule({
	imports:[
		CommonModule,
		EntregasRoutingModule,
		MaterialModule,
		BrowserAnimationsModule,
		ReactiveFormsModule
	],

	exports:[],

	declarations:[
	EntregasComponent,
 	DetpiComponent,
 	SimulacoesComponent,
 	DealsComponent]
})


export class EntregasModule {}
