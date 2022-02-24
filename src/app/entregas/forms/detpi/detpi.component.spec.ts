import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetpiComponent } from './detpi.component';

describe('DetpiComponent', () => {
  let component: DetpiComponent;
  let fixture: ComponentFixture<DetpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
