import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { RangeCustomEvent } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CurrencyPipe } from '@angular/common'
registerLocaleData(ptBr);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, CurrencyPipe]
})
export class HomePage {
  constructor(private currency: CurrencyPipe) {}

  lastEmittedValue: RangeValue = 0.1;
  contribuicao = "";
  salario = 3000;
  percentual = 0.1;

  onIonInput(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }

  onIonChange() {
    this.contribuicao = this.currency.transform(this.salario * (this.percentual/100), 'R$')!;
  }
}
