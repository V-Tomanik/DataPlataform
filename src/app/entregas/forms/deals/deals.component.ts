import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormService } from '../../services/forms.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

	dealsForm!:FormGroup;

	selectedFiles:string[]=[]

  constructor(private formBuilder: FormBuilder,
						  private formService: FormService){
							}

  ngOnInit(): void {

		this.dealsForm = this.formBuilder.group(
			{'meio': [null, Validators.required],
			'mes': [null,[Validators.required],],
			'gender': ['male'],
			'files':[null]}
		);
  }
	
	onSubmit(form:FormGroupDirective){
		/**
			* Função de envio do forms para backend, result deve retornar um observable
			* para podemos entender o resultado e mostrar para o usuario
			*
			*/

			const result = this.formService.uploadFile(this.dealsForm)
			if (result == null) { 
				alert("nenhum arquivo selecionado")
				return	
			}
			result.subscribe(count => alert(count))
			form.resetForm()
			this.dealsForm.reset()
	}
	onFileSelected(event:any){
		/**
			* Função para adicionar o arquivo selectionado na lista de arquivos
			* Ativado toda vez que há uma mudança no input file 
			*/
		const event_file:File[] = event.target.files;
		Array.prototype.forEach.call(event_file, child => {
		this.selectedFiles.push(child.name)
		});
	}

	removeFile(file_index:number){
		this.selectedFiles.splice(file_index,1)
	}

	}



