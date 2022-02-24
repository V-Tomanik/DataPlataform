import { Validators } from '@angular/forms';

export class FormsOptions{
	
	buscaForms(id:string):{ui:Array<any>,template:{}}{
		
		if (id === 'detpi'){
			return {
			ui:[

				{tipo:'select',
				label:'Meio',
				formName:'meio',
				options:[{value:'otv',label:'OTV'},{value:'ptv',label:'PTV'}]},

				{tipo:'select',
				label:'Mes Arquivo',
				formName:'mes',
				options:[{value:'1',label:'Janeiro'},{value:'2',label:'Fevereiro'},{value:'3',label:'Março'}]
				},

				{tipo:'input',
				label:'Gender',
				formName:'gender'}
				],
			template: {
					'meio': [null, Validators.required],
					'mes': [null,[Validators.required],],
					'gender': ['male'],
					'files':[null]
			}
		}
		}
		if (id === 'simulacoes'){
			return {ui:[],template:{}} 
		}
		else{return{ui:[],template:{}}} 
	}



}
