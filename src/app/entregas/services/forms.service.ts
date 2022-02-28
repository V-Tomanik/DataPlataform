import { Injectable } from "@angular/core";
import { BackEndService } from "src/app/shared/services/httpClient.service";

import { interval } from 'rxjs' 


@Injectable()
export class FormService{

	fileName = '';

	constructor(httpClient: BackEndService) {
	}

	uploadFile(event:any){
		//Pega o arquivo	
		console.log(event);
		console.log(event.value)
		//const file:File = event.target.files[0]	;
		
		if (event.value.files != null){
			console.log(event)
			return interval(1000);
	}
		return null
	}


}
