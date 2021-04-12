import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntepolationComponent } from './intepolation.component';

describe('IntepolationComponent', () => {
  let component: IntepolationComponent;
  let fixture: ComponentFixture<IntepolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntepolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntepolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
