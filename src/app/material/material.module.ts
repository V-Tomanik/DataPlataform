import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const MaterialComponents = [MatSidenavModule,
														MatToolbarModule,
														MatIconModule,
														MatButtonModule,
														FlexLayoutModule,
														MatListModule];


@NgModule({
  imports: [MaterialComponents],
	exports:[MaterialComponents]
})
export class MaterialModule { }
