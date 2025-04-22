import {computed, inject, Injectable, signal} from '@angular/core';
import {SoundService} from './sound.service';
import {EGear} from "../enums/gear.enum";
import {ShifterType} from "../types/shifter.type";

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private _gear = signal<EGear>(EGear.D);
  private _shifterMode = signal<ShifterType>('A');
  private _lowBeamOn = signal<boolean>(false);
  private _highBeamOn = signal<boolean>(false);
  private _lowFuel = signal<boolean>(true);

  public gear = computed(() => this._gear());
  public shifterMode = computed(() => this._shifterMode());
  public lowBeamOn = computed(() => this._lowBeamOn());
  public highBeamOn = computed(() => this._highBeamOn());
  public lowFuel = computed(() => this._lowFuel());

  private stateIsOn: boolean = false;

  private soundService: SoundService = inject(SoundService);

  public startStopCar(): void {
    this.stateIsOn = !this.stateIsOn;

    if (this.stateIsOn) {
      this.soundService.playEngineSound();

      this.park();
    } else {
      this.soundService.stopEngineSound();

      this.park();
    }
  }

  public lowBeamToggle(): void {
    this._lowBeamOn.set(!this._lowBeamOn());
  }

  public highBeamToggle(): void {
    this._highBeamOn.set(!this._highBeamOn());
  }

  public upShift(): void {
    if (![EGear.P, EGear.N, EGear.R, EGear.D].includes(this._gear())) {
      switch (this._gear()) {
        case EGear.D1:
          this._gear.set(EGear.D2);
          break;
        case EGear.D2:
          this._gear.set(EGear.D3);
          break;
        case EGear.D3:
          this._gear.set(EGear.D);
          this._shifterMode.set('A');
          break;
      }
    }
  }

  public downShift(): void {
    if (![EGear.P, EGear.N, EGear.R].includes(this._gear())) {
      if (this._shifterMode() === 'A') {
        this._shifterMode.set('M');
      }

      switch (this._gear()) {
        case EGear.D:
          this._gear.set(EGear.D1);
          break;
        case EGear.D3:
          this._gear.set(EGear.D2);
          break;
        case EGear.D2:
          this._gear.set(EGear.D1);
          break;
      }
    }
  }

  public park(): void {
    this._shifterMode.set('A');

    this._gear.set(EGear.P);
  }

  public upGear(): void {
    this._shifterMode.set('A');

    switch (this._gear()) {
      case EGear.P:
        this._gear.set(EGear.N);
        break;
      case EGear.N:
        this._gear.set(EGear.R);
        break;
      case EGear.D:
        this._gear.set(EGear.N);
        break;
    }
  }

  public downGear(): void {
    this._shifterMode.set('A');

    switch (this._gear()) {
      case EGear.P:
        this._gear.set(EGear.N);
        break;
      case EGear.R:
        this._gear.set(EGear.N);
        break;
      case EGear.N:
        this._gear.set(EGear.D);
        break;
    }
  }
}
