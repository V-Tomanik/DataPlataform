import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [MatSidenavModule,
														MatToolbarModule,
														MatIconModule,
														MatButtonModule,
														FlexLayoutModule];


@NgModule({
  imports: [MaterialComponents],
	exports:[MaterialComponents]
})
export class MaterialModule { }
