//import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
//import { BackEndService } from "src/app/shared/services/httpClient.service";


@Injectable()
export class FormService{
	httpClient= new EventEmitter<String>()
	fileName = '';

	constructor() {
	}

	uploadFile(event:any){
		//Pega o arquivo	
		//const file:File = event.target.files[0]	;
		
		console.log(event);
		const file:File[] = event.value.files
		console.log(file)
		if (file.length > 0 ){
			return this.httpClient
	}
		return null
	}


}
