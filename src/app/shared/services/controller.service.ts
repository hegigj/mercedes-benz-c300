import { inject, Injectable } from '@angular/core';
import { SoundService } from './sound.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private stateIsOn: boolean = false;

  private soundService: SoundService = inject(SoundService);

  public startStopCar(): void {
    this.stateIsOn = !this.stateIsOn;

    if (this.stateIsOn) {
      this.soundService.playEngineSound();
    }
  }
}
