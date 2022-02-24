import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

	forms_entrega={
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
	templateForms: {
			'meio': [null, Validators.required],
			'mes': [null,[Validators.required],],
			'gender': ['male'],
			'files':[null]
	}}


	templateForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,
						 private route: ActivatedRoute) { }

  ngOnInit(): void {
		const id = this.route.snapshot.params['id']	

		this.templateForm = this.formBuilder.group(
		this.forms_entrega.templateForms
		);
  }
	
	onSubmit(){
		console.log(this.templateForm	)

	}
}
