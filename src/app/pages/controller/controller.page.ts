import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import {BlinkingButtonComponent} from "../../shared/components/blinking-button/blinking-button.component";
import {IOutputPayload} from "../../shared/interfaces/output-payload.interface";

@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, BlinkingButtonComponent]
})
export class ControllerPage {
  blinkerLeft = signal<boolean>(false);
  blinkerRight = signal<boolean>(false);

  protected turnSignal(event: IOutputPayload): void {
    switch (event.type) {
      case 'LEFT_TURN_SIGNAL':
        this.blinkerRight.set(false);
        break;
      case 'RIGHT_TURN_SIGNAL':
        this.blinkerLeft.set(false);
    }
  }
}
