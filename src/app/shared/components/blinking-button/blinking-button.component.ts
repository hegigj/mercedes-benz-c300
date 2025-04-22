import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  OnChanges,
  Output,
  signal,
  SimpleChanges
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EBlinkingLights } from '../../enums/blinking-lights.enum';
import { IBlinkingButtonAction } from '../../interfaces/blinking-button-action.interface';
import { SizeType } from '../../types/size.type';
import {SoundService} from "../../services/sound.service";

@Component({
  selector: 'app-blinking-button',
  templateUrl: './blinking-button.component.html',
  imports: [
    IonicModule
  ],
  standalone: true
})
export class BlinkingButtonComponent implements OnChanges {
  @Input()
  buttonColor: string = 'light';

  @Input()
  blink = false;

  @Output()
  action = new EventEmitter<IBlinkingButtonAction>()

  blinkColor = input.required<string>();
  buttonSize = input<SizeType>('large');
  icon = input.required<string>();
  interval = input<number>(375);
  type = input.required<EBlinkingLights>();

  private blinkingIntervalRef: any;

  protected _buttonColor = signal<string>('light');

  private readonly soundService: SoundService = inject(SoundService);

  ngOnChanges(changes: SimpleChanges): void {
    if ('blink' in changes) {
      this.endBlinking();

      this.blink
        ? this.startBlinking()
        : this.endBlinking();
    }

    if ('buttonColor' in changes) {
      this._buttonColor.set(this.buttonColor);
    }
  }

  protected click(event: MouseEvent): void {
    event.preventDefault();

    this.endBlinking();
    this.soundService.stopBlinkerSound();

    if (this.blink) {
      this.blink = false;
      this.endBlinking();
      this.soundService.stopBlinkerSound();
    } else {
      this.blink = true;
      this.startBlinking();
      this.soundService.playBlinkerSound();
    }

    this.action.emit({
      type: this.type(),
      payload: {
        blinking: this.blink
      }
    });
  }

  private startBlinking(): void {
    this.blinkingIntervalRef = setInterval(
      () => {
        if (this._buttonColor() === this.buttonColor) {
          this._buttonColor.set(this.blinkColor());
        } else {
          this._buttonColor.set(this.buttonColor);
        }
      },
      this.interval()
    );
  }

  private endBlinking(): void {
    if (this.blinkingIntervalRef) {
      clearInterval(this.blinkingIntervalRef);
      this.blinkingIntervalRef = null;
    }

    this._buttonColor.set(this.buttonColor);
  }
}
