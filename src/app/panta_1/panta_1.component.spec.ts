import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaunoComponent } from './panta_1.component';

describe('PantallaunoComponent', () => {
  let component: PantallaunoComponent;
  let fixture: ComponentFixture<PantallaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
