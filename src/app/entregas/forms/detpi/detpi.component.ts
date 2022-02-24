import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detpi',
  templateUrl: './detpi.component.html',
  styleUrls: ['./detpi.component.css']
})
export class DetpiComponent implements OnInit {

	detpiForm!:FormGroup;

  constructor(private formBuilder: FormBuilder)
						  { }

  ngOnInit(): void {

		this.detpiForm = this.formBuilder.group(
			{'meio': [null, Validators.required],
			'mes': [null,[Validators.required],],
			'gender': ['male'],
			'files':[null]}
		);
  }
	
	onSubmit(){
		console.log(this.detpiForm	)

	}
}

