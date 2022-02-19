import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-menu-list',
  templateUrl: './header-menu-list.component.html',
  styleUrls: ['./header-menu-list.component.css']
})
export class HeaderMenuListComponent implements OnInit {
	@Output() menuClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

	menuHeaderClose(){
		this.menuClose.emit();
	}
}
