import {Component, inject, Input, input, OnChanges, output, signal, SimpleChanges} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IOutputPayload } from '../../interfaces/output-payload.interface';
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

  blinkColor = input.required<string>();
  buttonSize = input<SizeType>('large');
  icon = input.required<string>();
  interval = input<number>(375);
  type = input.required<string>();

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  public onClick = output<IOutputPayload>();

  private blinkingIntervalRef: any;

  protected _buttonColor = signal<string>('light');

  private readonly soundService: SoundService = inject(SoundService);

  ngOnChanges(changes: SimpleChanges): void {
    if ('blink' in changes) {
      if (this.blink) {
        this.startBlinking();
      } else {
        this.endBlinking();
      }
    }

    if ('buttonColor' in changes) {
      this._buttonColor.set(this.buttonColor);
    }
  }

  protected click(event: MouseEvent): void {
    event.preventDefault();

    if (this.blink) {
      this.soundService.stopBlinkerSound();
      this.endBlinking();
    } else {
      this.soundService.playBlinkerSound();
      this.startBlinking();
    }

    this.onClick.emit({
      type: this.type(),
      payload: {
        blink: this.blink
      }
    });
  }

  private startBlinking(): void {
    this.blink = true;

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
    this.blink = false;

    if (this.blinkingIntervalRef) {
      clearInterval(this.blinkingIntervalRef);
      this.blinkingIntervalRef = null;
    }

    this._buttonColor.set(this.buttonColor);
  }
}
