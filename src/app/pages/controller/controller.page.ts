import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';
import {
  TurnSignalsAndHazardLightsComponent
} from '../../shared/components/turn-signals-and-hazard-lights/turn-signals-and-hazard-lights.component';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, TurnSignalsAndHazardLightsComponent, IonButton, IonIcon]
})
export class ControllerPage {

}
