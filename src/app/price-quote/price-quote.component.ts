import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.less']
})
export class PriceQuoteComponent implements OnInit {

  stockCode: string = 'IBM';

  price: number;

  @Output('priceChange')
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter<PriceQuote>();

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter<PriceQuote>();

  constructor() {
    setInterval(() => {
      let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000);
  }

  ngOnInit(): void {

  }


  buyStock(event: any) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }

}

export class PriceQuote {

  constructor(
    public stockCode: string,
    public lastPrice: number,
  ) {

  }


}
