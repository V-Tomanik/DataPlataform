import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EntregasRoutingModule } from "./entregas-routing.module";
import { MaterialModule } from "../material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { EntregasComponent } from "./entregas.component";
import { EntregaComponent } from "./entrega/entrega.component";




@NgModule({
	imports:[
		CommonModule,
		EntregasRoutingModule,
		MaterialModule,
		BrowserAnimationsModule,
		ReactiveFormsModule
	],
	exports:[
		EntregasComponent,
		EntregaComponent
	],

	declarations:[
	EntregasComponent,
	EntregaComponent]
})


export class EntregasModule {}
