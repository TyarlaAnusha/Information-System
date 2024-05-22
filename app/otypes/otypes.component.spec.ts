import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtypesComponent } from './otypes.component';

describe('OtypesComponent', () => {
  let component: OtypesComponent;
  let fixture: ComponentFixture<OtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
