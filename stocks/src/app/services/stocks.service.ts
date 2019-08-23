import { Injectable } from '@angular/core';
import { Stock } from 'model/stock';
import { HttpClient } from '@angular/common/http';


let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpClient : HttpClient) { }

  get(){
    return stocks.slice();
  }

  add(stock){
    stocks.push(stock);
    return this.get();
  }

  remove(stock){
    stocks.splice(stocks.indexOf(stock),1);
    return this.get();
  }

  load(symbols){
    if(symbols){
      return this.httpClient.get<Array<Stock>>(service +'/stocks/snapshot?symbols=' + symbols.join() );
    }
  }

}
