import { Component } from '@angular/core';
import { StocksService } from './services/stocks.service';
import { Stock } from 'model/stock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocks';
  stocks : Array<Stock>

constructor(service: StocksService){
  service.load(service.get()).subscribe(stocks => this.stocks = stocks)
}

}
