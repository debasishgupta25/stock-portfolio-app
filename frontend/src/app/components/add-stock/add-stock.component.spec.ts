import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStockComponent } from './add-stock.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { StockService } from 'src/app/services/stock.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";


describe('AddStockComponent', () => {
  let component: AddStockComponent;
  let fixture: ComponentFixture<AddStockComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStockComponent],
      imports: [ HttpClientTestingModule, HttpClientModule, FormsModule, RouterTestingModule ],
      providers: [StockService]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AddStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const stockService: StockService = TestBed.get(StockService);
    expect(component).toBeTruthy();
    expect(stockService).toBeTruthy();
  });
});
