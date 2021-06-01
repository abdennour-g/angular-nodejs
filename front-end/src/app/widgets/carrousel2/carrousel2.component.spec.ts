import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrousel2Component } from './carrousel2.component';

describe('Carrousel2Component', () => {
  let component: Carrousel2Component;
  let fixture: ComponentFixture<Carrousel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrousel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
