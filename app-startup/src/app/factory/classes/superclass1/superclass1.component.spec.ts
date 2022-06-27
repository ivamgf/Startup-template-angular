import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Superclass1Component } from './superclass1.component';

describe('Superclass1Component', () => {
  let component: Superclass1Component;
  let fixture: ComponentFixture<Superclass1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Superclass1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Superclass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
