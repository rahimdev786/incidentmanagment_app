import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanpageComponent } from './commanpage.component';

describe('CommanpageComponent', () => {
  let component: CommanpageComponent;
  let fixture: ComponentFixture<CommanpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommanpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommanpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
