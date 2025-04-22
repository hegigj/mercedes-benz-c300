import {Component, signal} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink
} from '@ionic/angular/standalone';
import {IPage} from "./shared/interfaces/page.interface";
import {pages} from "./shared/constants/pages.constants";
import {TranslateModule, TranslatePipe} from "@ngx-translate/core";
import {addIcons} from "ionicons";
import { add, caretBack, caretForward, gameController, remove, settings, triangle } from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    TranslateModule,
    TranslatePipe,
  ],
  providers: [
    TranslatePipe
  ],
  standalone: true
})
export class AppComponent {
  public pages = signal<IPage[]>(pages);


  constructor() {
    addIcons({
      gameController,
      settings,
      caretBack,
      caretForward,
      triangle,
      add,
      remove
    });
  }
}
