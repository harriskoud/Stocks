import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) { }

  ngOnInit() {
    this.symbols = this.service.get();
  }

  removeStock(stockSymbol){
      this.symbols = this.service.remove(stockSymbol);
  }

  addStock(){
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }


}
