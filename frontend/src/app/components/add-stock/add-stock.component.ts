import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css'],
})
export class AddStockComponent {
  stock: Stock = {
    symbol: '',
    quantity: undefined
  };
  submitted = false;

  constructor(
    private stockService: StockService, 
    private route: ActivatedRoute,
    private router: Router) {}

  saveStock(): void {
    const data = {
      name: this.stock.name,
      symbol: this.stock.symbol,
      quantity: this.stock.quantity,
      price: this.stock.price
    };

    this.stockService.create(data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newStock(): void {
    this.submitted = false;
    this.stock = {
      name: '',
      symbol: '',
      quantity: undefined,
      price: ''
    };
  }

  navigateToBack() {
    this.router.navigate(['stockportfolio/']);
  }
}
