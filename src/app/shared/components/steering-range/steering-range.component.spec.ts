import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SteeringRangeComponent } from './steering-range.component';

describe('SteeringRangeComponent', () => {
  let component: SteeringRangeComponent;
  let fixture: ComponentFixture<SteeringRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SteeringRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SteeringRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
