import { Injectable } from "@angular/core";

@Injectable()
export class FeaturesService{

	constructor(){}


 	private featuresList ={
		entregas:['detpi','deals'],
		calendario:true
	}

	getActiveEntregas():null | string[]{
		if (this.featuresList.entregas.length != 0){
			return this.featuresList.entregas
	}
	return null
	}
}
