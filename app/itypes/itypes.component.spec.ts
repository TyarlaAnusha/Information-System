import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItypesComponent } from './itypes.component';

describe('ItypesComponent', () => {
  let component: ItypesComponent;
  let fixture: ComponentFixture<ItypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
