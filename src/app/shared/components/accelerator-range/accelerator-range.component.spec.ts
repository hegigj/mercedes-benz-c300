import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AcceleratorRangeComponent } from './accelerator-range.component';

describe('AcceleratorRangeComponent', () => {
  let component: AcceleratorRangeComponent;
  let fixture: ComponentFixture<AcceleratorRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AcceleratorRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcceleratorRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
