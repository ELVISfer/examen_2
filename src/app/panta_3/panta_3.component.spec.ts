import { ComponentFixture, TestBed } from '@angular/core/testing';

import { panta_3Component } from './panta_3component';

describe('panta_3Component', () => {
  let component: panta_3Component;
  let fixture: ComponentFixture<panta_3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ panta_3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(panta_3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
