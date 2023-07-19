import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { RangeCustomEvent } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  constructor() {}

  lastEmittedValue: RangeValue = 0.1;
  contribuicao = "0";
  salario = 3000;
  percentual = 0.1;

  onIonInput(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }

  onIonChange() {
    this.contribuicao = (this.salario * (this.percentual/100)).toFixed(2);
  }
}
