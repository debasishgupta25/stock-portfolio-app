import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockDetailsComponent } from './stock-details.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StockService } from 'src/app/services/stock.service';
import { RouterTestingModule } from "@angular/router/testing";



describe('StockDetailsComponent', () => {
  let component: StockDetailsComponent;
  let fixture: ComponentFixture<StockDetailsComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockDetailsComponent],
      imports: [ HttpClientTestingModule , FormsModule, RouterTestingModule],
      providers: [StockService]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    
    fixture = TestBed.createComponent(StockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
