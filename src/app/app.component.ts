import {Component} from '@angular/core';
import {PriceQuote} from "./price-quote/price-quote.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  stock = '';

  priceQuote: PriceQuote = new PriceQuote('', 0);

  priceQuoteHandler(priceQuote: PriceQuote) {
    this.priceQuote = priceQuote;
  }

  buyHandler(priceQuote: PriceQuote) {
    this.priceQuote = priceQuote;
  }

}
