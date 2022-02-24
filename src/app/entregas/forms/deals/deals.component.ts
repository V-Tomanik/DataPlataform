import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

	dealsForm!:FormGroup;

  constructor(private formBuilder: FormBuilder)
						  { }

  ngOnInit(): void {

		this.dealsForm = this.formBuilder.group(
			{'meio': [null, Validators.required],
			'mes': [null,[Validators.required],],
			'gender': ['male'],
			'files':[null]}
		);
  }
	
	onSubmit(){
		console.log(this.dealsForm	)

	}
}


