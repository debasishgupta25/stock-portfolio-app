import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'stockportfolio', pathMatch: 'full' },
  { path: 'stockportfolio', component: StockListComponent },
  { path: 'stockportfolio/stock/:id', component: StockDetailsComponent },
  { path: 'stockportfolio/addstock', component: AddStockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
