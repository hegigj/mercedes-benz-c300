import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TurnSignalsAndHazardLightsComponent } from './turn-signals-and-hazard-lights.component';

describe('TurnSignalsAndHazardLightsComponent', () => {
  let component: TurnSignalsAndHazardLightsComponent;
  let fixture: ComponentFixture<TurnSignalsAndHazardLightsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TurnSignalsAndHazardLightsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TurnSignalsAndHazardLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
