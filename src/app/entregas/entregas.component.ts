import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../shared/services/features.service';
import { entregaModel } from './models/entrega.model';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {
	
	tiposEntregas: entregaModel[] = [{id:'detpi',nome:"DetPI", descricao:"Detalhamento de PI", rota:"detpi" },
									{id:'deals',nome:"Deals", descricao:"Deals", rota:"deals" },
									{id:'simulacoes',nome:"Deals", descricao:"Deals", rota:"deals" }
	]

	listEntregas!: null | entregaModel[]

  constructor(private featuresService: FeaturesService) {}

  ngOnInit(): void {
		this.listEntregas = this.filterEntregas(this.tiposEntregas)
  }

	filterEntregas(value:entregaModel[]){
	 	const	activeFeatures = this.featuresService.getActiveEntregas()
		if (activeFeatures){
			return value.filter(({id})=> activeFeatures.includes(id));
		}
		return null
	}
}
