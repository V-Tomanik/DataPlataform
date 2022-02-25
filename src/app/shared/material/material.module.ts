import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';//Side navigation
import { MatToolbarModule } from '@angular/material/toolbar'; //Header
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon'; //Icones
import { MatButtonModule } from '@angular/material/button'; //Botões
import { MatListModule } from '@angular/material/list'; //Lista
import { MatGridListModule } from '@angular/material/grid-list'; //Grid
import { MatCardModule } from '@angular/material/card'; //Cartões
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; //Input Box para forms
import { MatSelectModule } from '@angular/material/select'; //Select Box para forms

const MaterialComponents = [MatSidenavModule,
														MatToolbarModule,
														MatIconModule,
														MatButtonModule,
														FlexLayoutModule,
														MatListModule,
														MatGridListModule,
														MatCardModule,
														MatFormFieldModule,
														MatInputModule,
														MatSelectModule];


@NgModule({
  imports: [MaterialComponents],
	exports:[MaterialComponents]
})
export class MaterialModule { }
