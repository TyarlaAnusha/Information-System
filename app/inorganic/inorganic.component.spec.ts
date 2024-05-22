import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InorganicComponent } from './inorganic.component';

describe('InorganicComponent', () => {
  let component: InorganicComponent;
  let fixture: ComponentFixture<InorganicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InorganicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InorganicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
