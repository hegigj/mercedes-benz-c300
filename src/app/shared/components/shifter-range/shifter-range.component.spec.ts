import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShifterRangeComponent } from './shifter-range.component';

describe('ShifterRangeComponent', () => {
  let component: ShifterRangeComponent;
  let fixture: ComponentFixture<ShifterRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ShifterRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShifterRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
