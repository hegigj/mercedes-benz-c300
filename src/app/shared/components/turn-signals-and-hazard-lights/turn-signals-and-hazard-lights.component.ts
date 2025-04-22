import { Component, OnInit, signal } from '@angular/core';
import { EBlinkingLights } from '../../enums/blinking-lights.enum';
import { IBlinkingButtonAction } from '../../interfaces/blinking-button-action.interface';
import { BlinkingButtonComponent } from '../blinking-button/blinking-button.component';

@Component({
  selector: 'app-turn-signals-and-hazard-lights',
  templateUrl: './turn-signals-and-hazard-lights.component.html',
  standalone: true,
  imports: [
    BlinkingButtonComponent
  ],
  host: {
    'id': 'turn-signals-and-hazard-lights',
    'class': 'flex gap-6'
  }
})
export class TurnSignalsAndHazardLightsComponent  implements OnInit {
  protected _leftBlinker = signal<boolean>(false);
  protected _rightBlinker = signal<boolean>(false);
  protected _hazardLights = signal<boolean>(false);

  protected readonly blinkingLights = EBlinkingLights;

  constructor() { }

  ngOnInit() {}

  protected turnSignals(event: IBlinkingButtonAction): void {
    if (this._hazardLights()) {
      this._leftBlinker.set(false);
      this._rightBlinker.set(false)
      this._hazardLights.set(false);
    }

    switch (event.type) {
      case EBlinkingLights.LEFT_TURN_SIGNAL:
        this._leftBlinker.set(event.payload.blinking);
        this._rightBlinker.set(false);
        break;
      case EBlinkingLights.RIGHT_TURN_SIGNAL:
        this._rightBlinker.set(event.payload.blinking);
        this._leftBlinker.set(false);
        break;
    }
  }

  protected hazardLights(event: IBlinkingButtonAction): void {
    const isBlinking: boolean = event.payload.blinking;

    this._leftBlinker.set(isBlinking);
    this._rightBlinker.set(isBlinking);
    this._hazardLights.set(isBlinking);
  }
}
