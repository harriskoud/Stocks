import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { Stock } from 'src/model/stock';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Array<Stock>;

  constructor(private service: StocksService) { }

  ngOnInit() {
    this.service.load(this.service.get()).subscribe(stocks => this.stocks = stocks)
  }

}
