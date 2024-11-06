import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockListComponent } from './stock-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StockService } from 'src/app/services/stock.service';
import { RouterTestingModule } from "@angular/router/testing";
import { StockDetailsComponent } from './../stock-details/stock-details.component';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockListComponent, StockDetailsComponent],
      imports: [ HttpClientTestingModule , FormsModule, RouterTestingModule],
      providers: [StockService]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    
    fixture = TestBed.createComponent(StockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
