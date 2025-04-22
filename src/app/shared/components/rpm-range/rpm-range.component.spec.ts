import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RpmRangeComponent } from './rpm-range.component';

describe('RpmRangeComponent', () => {
  let component: RpmRangeComponent;
  let fixture: ComponentFixture<RpmRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RpmRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RpmRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
