import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../shared/services/features.service';
import { entregaModel } from './models/entrega.model';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {
	/**
		* Componente "mãe" das entregas, lista todas as entregas disponiveis para serem enviadas
		* 
		*/

	tiposEntregas: entregaModel[] = [
									{id:'detpi',nome:"DetPI", descricao:"Detalhamento de PI", rota:"detpi" },
									{id:'deals',nome:"Deals", descricao:"Deals", rota:"deals" },
									{id:'simulacoes',nome:"Deals", descricao:"Deals", rota:"deals" }]

	listEntregas!: null | entregaModel[] /* Lista de entregas disponiveis para o usuario */

  constructor(private featuresService: FeaturesService) {}

  ngOnInit(): void {
		this.listEntregas = this.filterEntregas(this.tiposEntregas)
  }

	filterEntregas(list:entregaModel[]){
		/**
			* Função para a filtragem das entregas disponiveis para o usuario
			* @param list: lista com todos os tipos de entrega possiveis
			*/

	 	const	activeFeatures = this.featuresService.getActiveEntregas()
		if (activeFeatures){
			return list.filter(({id})=> activeFeatures.includes(id));
		}
		return null
	}
}
