import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoDomComponent } from './acceso-dom.component';

describe('AccesoDomComponent', () => {
  let component: AccesoDomComponent;
  let fixture: ComponentFixture<AccesoDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoDomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
