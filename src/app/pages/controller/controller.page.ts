import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import {BlinkingButtonComponent} from "../../shared/components/blinking-button/blinking-button.component";

@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, BlinkingButtonComponent]
})
export class ControllerPage {
}
