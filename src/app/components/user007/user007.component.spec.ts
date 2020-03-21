import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User007Component } from './user007.component';

describe('User007Component', () => {
  let component: User007Component;
  let fixture: ComponentFixture<User007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
