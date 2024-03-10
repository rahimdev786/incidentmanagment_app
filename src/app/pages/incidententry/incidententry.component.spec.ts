import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidententryComponent } from './incidententry.component';

describe('IncidententryComponent', () => {
  let component: IncidententryComponent;
  let fixture: ComponentFixture<IncidententryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidententryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidententryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
