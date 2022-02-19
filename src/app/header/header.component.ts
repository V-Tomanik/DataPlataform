import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Output() headerMenuClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

	//Função que emite um sinal para o app.component que o menu foi clicado
	OnToggleSidenav(){
		this.headerMenuClick.emit();	
	}
}
