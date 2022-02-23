import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {
	
	templateForm!:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
		this.templateForm = this.formBuilder.group({

			'username': [null],
			'email': [null],
			'gender': ['male'],
			'files':[null]
		});
  }
	
	onSubmit(){
		console.log(this.templateForm	)

	}
}
