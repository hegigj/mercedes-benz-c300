import { animate, AnimationBuilder, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, input, OnInit, output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IOutputPayload } from '../../interfaces/output-payload.interface';
import { SizeType } from '../../types/size.type';

@Component({
  selector: 'app-blinking-button',
  templateUrl: './blinking-button.component.html',
  imports: [
    IonicModule
  ],
  standalone: true
})
export class BlinkingButtonComponent implements OnInit {
  blink = input<boolean>(false);
  buttonSize = input<SizeType>('large');
  icon = input.required<string>();
  interval = input<number>(600);
  type = input.required<string>();

  onClick = output<IOutputPayload>();

  private readonly animationBuilder: AnimationBuilder = inject(AnimationBuilder)

  ngOnInit(): void {
    this.animationBuilder.build([
      trigger('blinking', [
        state('tik', style({})),
        state('tak', style({})),
        transition('tik <=> tak', [animate(`${this.interval()}ms ease-in-out`)])
      ])
    ]);
  }

  protected click(event: MouseEvent): void {
    event.preventDefault();

    this.startBlinking();

    this.onClick.emit({
      type: this.type(),
      payload: {}
    });
  }

  private startBlinking(): void {

  }

  private endBlinking(): void {}
}
