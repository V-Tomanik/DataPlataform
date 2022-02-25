import { Component } from '@angular/core';
import { FeaturesService } from './shared/services/features.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers:[FeaturesService]
})
export class AppComponent {
  title = 'DataPlataform';
}
