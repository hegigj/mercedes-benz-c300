import { Component, OnInit, signal } from '@angular/core';
import {IonRange} from "@ionic/angular/standalone";

@Component({
  selector: 'app-accelerator-range',
  templateUrl: './accelerator-range.component.html',
  standalone: true,
  imports: [
    IonRange
  ]
})
export class AcceleratorRangeComponent  implements OnInit {
  protected value = signal<number>(20);

  constructor() { }

  ngOnInit() {}

}
