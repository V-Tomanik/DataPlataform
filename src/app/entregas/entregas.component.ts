import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {
	
	tiposEntregas = [{nome:"Entrega 1", descricao:"Arquivo de teste 1", rota:"entrega1" },
									{nome:"Entrega 2", descricao:"Arquivo de teste 2", rota:"entrega2" }]


  constructor() { }

  ngOnInit(): void {
  }

}
