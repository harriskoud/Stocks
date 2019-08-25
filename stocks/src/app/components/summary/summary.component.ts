import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/model/stock';


@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() stock: Stock;

  constructor() { }

  ngOnInit() {
  }

  isNegative(){
    return this.stock && this.stock.change < 0;
  }

  isPositive(){
    return this.stock && this.stock.change > 0;
  }

}
