import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrousel1Component } from './carrousel1.component';

describe('Carrousel1Component', () => {
  let component: Carrousel1Component;
  let fixture: ComponentFixture<Carrousel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrousel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
