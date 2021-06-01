import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfooterComponent } from './elfooter.component';

describe('ElfooterComponent', () => {
  let component: ElfooterComponent;
  let fixture: ComponentFixture<ElfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
