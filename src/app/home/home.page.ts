import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { RangeCustomEvent } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CurrencyPipe } from '@angular/common'
registerLocaleData(ptBr);
import { NgxCurrencyDirective } from "ngx-currency";
import { NgxSliderModule } from 'ngx-slider-v2';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, NgxCurrencyDirective, NgxSliderModule],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, CurrencyPipe]
})
export class HomePage {
  constructor(private currency: CurrencyPipe) {}

  lastEmittedValue: RangeValue = 0.1;
  contribuicao = "";
  salario = 0;
  percentual = 0.1;
  options: Options = {
    floor: 0.1,
    ceil: 4,
    step: 0.1
  };
  pinFormatter(value: number) {
    return `${value}`;
  }

  onIonInput(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }

  onIonChange() {
    this.contribuicao = this.currency.transform(this.salario * (this.percentual/100), 'R$')!;
  }
}
