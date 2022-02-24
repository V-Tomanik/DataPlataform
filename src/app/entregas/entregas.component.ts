import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {
	
	tiposEntregas = [{nome:"DetPI", descricao:"Detalhamento de PI", rota:"detpi" },
									{nome:"Deals", descricao:"Deals", rota:"deals" }]

  constructor() {}

  ngOnInit(): void {
  }

}
