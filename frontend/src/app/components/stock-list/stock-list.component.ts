import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  stockList?: Stock[];
  currentStock: Stock = {};
  currentIndex = -1;
  totalValue = 0;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.retrieveStocks();
  }

  retrieveStocks(): void {
    this.stockService.getAll().subscribe({
      next: (data) => {
        this.stockList = data;
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveStocks();
    this.currentStock = {};
    this.currentIndex = -1;
  }

  setActiveStock(stock: Stock, index: number): void {
    this.currentStock = stock;
    this.currentIndex = index;
    this.totalValue = Number(this.currentStock.quantity) * Number(this.currentStock.price);
  }
}
