import {Component, computed, inject} from '@angular/core';
import {RpmRangeComponent} from '../rpm-range/rpm-range.component';
import {IonIcon, IonLabel} from '@ionic/angular/standalone';
import {ControllerService} from '../../services/controller.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    IonLabel,
    RpmRangeComponent,
    IonIcon
  ]
})
export class DashboardComponent {
  protected shifterModeColor = computed(() => {
    switch (this.controllerService.shifterMode()) {
      case 'A':
        return 'success';
      case 'M':
        return 'warning';
      default:
        return 'medium';
    }
  });
  protected shifterMode = computed(() => this.controllerService.shifterMode());

  protected gearColor = computed(() => {
    switch (this.controllerService.gear()) {
      case 'P':
        return 'danger';
      case 'N':
        return 'medium';
      case 'R':
      case 'D':
      case 'D1':
      case 'D2':
      case 'D3':
        return 'success';
      default:
        return 'medium';
    }
  });
  protected gear = computed(() => this.controllerService.gear());

  protected lowBeamColor = computed(() => this.controllerService.lowBeamOn() ? 'success' : 'light');
  protected highBeamColor = computed(() => this.controllerService.highBeamOn() ? 'primary' : 'light');
  protected lowFuelColor = computed(() => this.controllerService.lowFuel() ? 'warning' : 'light');

  private readonly controllerService: ControllerService = inject(ControllerService);
}
