import { Component, OnInit } from '@angular/core';
import {IonRange} from "@ionic/angular/standalone";

@Component({
  selector: 'app-rpm-range',
  templateUrl: './rpm-range.component.html',
  standalone: true,
  imports: [
    IonRange
  ]
})
export class RpmRangeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
