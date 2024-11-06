import { Component, Input, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css'],
})
export class StockDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentStock: Stock = {
    name: '',
    symbol: '',
    quantity: undefined,
    price: ''
  };

  @Input() totalValue:any;
  message = '';

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getStock(this.route.snapshot.params['id']);
    }
  }

  getStock(id: string): void {
    this.stockService.get(id).subscribe({
      next: (data) => {
        this.currentStock = data;
      },
      error: (e) => console.error(e)
    });
  }

  updateStock(): void {
    this.message = '';
    this.stockService
      .update(this.currentStock.id, this.currentStock)
      .subscribe({
        next: (res) => {
          this.message = res.message
            ? res.message
            : 'This Stock was updated successfully! You will be redirected to Home page after 3 seconds.';
          setTimeout(()=> {
            this.router.navigate(['/stockportfolio']);
          },3000);
        },
        error: (e) => console.error(e)
      });
  }

  deleteStock(): void {
    this.stockService.delete(this.currentStock.id).subscribe({
      next: (res) => {
        this.currentStock = {};
        this.message = 'This Stock was deleted successfully! You will be redirected to Home page after 3 seconds.';
        setTimeout(()=> {
          this.router.navigate(['/stockportfolio']);
        },3000);
      },
      error: (e) => console.error(e)
    });
  }

  navigateToEdit(id: String) {
    this.router.navigate(['stockportfolio/stock/'+id]);
  }

  navigateToBack() {
    this.router.navigate(['stockportfolio/']);
  }
}
