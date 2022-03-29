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
	
	//TODO Pegar o nome dos arquivos dentro do selectedFiles
	selectedFiles:File[] =[];
	filesNames:string[] =[];

  constructor(private formBuilder: FormBuilder,
						  private formService: FormService){
							}

  ngOnInit(): void {

		this.dealsForm = this.formBuilder.group(
			{'meio': [null, Validators.required],
			'mes': [null,[Validators.required],],
			'tipo': [null, Validators.required],
			'files':[null]}
		);
  }
	
	onSubmit(form:FormGroup){
		/**
			* Função de envio do forms para backend, result deve retornar um observable
			* para podemos entender o resultado e mostrar para o usuario
			*
			*/

			this.dealsForm.patchValue({'files':this.selectedFiles})

			//Faz o upload para o backend
			const result = this.formService.uploadFile(this.dealsForm)
			if (result == null) { 
				alert("nenhum arquivo selecionado")
				return	
			}
			
			result.subscribe(message => alert(message))

			//Reseta o forms
			this.selectedFiles=[];
			this.filesNames=[];
			form.reset();
			//Reseta os validadores
			for (let control in form.controls) {
      	form.controls[control].setErrors(null);
    }
	}

	onFileSelected(event:any){
		/**
			* Ativado toda vez que há uma mudança no input file 
		  *
			* Função para adicionar o arquivo selectionado na lista de arquivos
			*/
			this.filesNames=[]

			//Adiciona os valores atuais e os arquivos dos eventos
			this.selectedFiles = [...this.selectedFiles,...event.target.files];

			//Atualiza a lista com nomes de arquivos
			Array.prototype.forEach.call(this.selectedFiles, child => {
				this.filesNames.push(child.name)});
	}



	removeFile(file_index:number){
		this.selectedFiles.splice(file_index,1)
		this.filesNames.splice(file_index,1)
	}

}
