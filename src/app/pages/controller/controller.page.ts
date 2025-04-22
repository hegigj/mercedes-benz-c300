import { Component, inject } from '@angular/core';
import { IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';
import { AcceleratorRangeComponent } from '../../shared/components/accelerator-range/accelerator-range.component';
import { RpmRangeComponent } from '../../shared/components/rpm-range/rpm-range.component';
import { ShifterRangeComponent } from '../../shared/components/shifter-range/shifter-range.component';
import { SteeringRangeComponent } from '../../shared/components/steering-range/steering-range.component';
import {
  TurnSignalsAndHazardLightsComponent
} from '../../shared/components/turn-signals-and-hazard-lights/turn-signals-and-hazard-lights.component';
import { ControllerService } from '../../shared/services/controller.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  standalone: true,
  imports: [IonContent, TurnSignalsAndHazardLightsComponent, IonButton, IonIcon, AcceleratorRangeComponent, RpmRangeComponent, ShifterRangeComponent, SteeringRangeComponent]
})
export class ControllerPage {
  protected readonly controllerService: ControllerService = inject(ControllerService);
}
