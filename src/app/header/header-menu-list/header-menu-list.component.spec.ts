import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuListComponent } from './header-menu-list.component';

describe('HeaderMenuListComponent', () => {
  let component: HeaderMenuListComponent;
  let fixture: ComponentFixture<HeaderMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
