import { ComponentFixture, TestBed } from '@angular/core/testing';

import { panta_2Component } from './panta_2.component';

describe('Panta_2Component', () => {
  let component: panta_2Component;
  let fixture: ComponentFixture<panta_2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ panta_2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(panta_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
