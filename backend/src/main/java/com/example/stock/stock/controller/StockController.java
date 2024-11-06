package com.example.stock.stock.controller;

import com.example.stock.stock.model.Stock;
import com.example.stock.stock.service.LiveApiStockService;
import com.example.stock.stock.service.StockService;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1")
public class StockController {

    private final StockService stockService;
private final LiveApiStockService liveService;
    public StockController(StockService stockService, LiveApiStockService liveService) {
        this.stockService = stockService;
        this.liveService = liveService;
    }

    @PostMapping("/stock")
    public Stock addStock(@RequestBody Stock stock) {
        stock.setId(UUID.randomUUID());
        stock.setPrice(liveService.getStockPrice(stock.getSymbol()));
        return stockService.addStock(stock);
    }

    @GetMapping("/stock/{id}")
    public Stock getStockById(@PathVariable UUID id) {
        Optional<Stock> stockOptional = stockService.getStockById(id);
        System.out.println();
        if (!stockOptional.isEmpty()) {
            Stock stock = stockOptional.get();
            stockOptional.get().setPrice(liveService.getStockPrice(stock.getSymbol()));
            return stockOptional.get();
        }
        else return null;
    }


    @PatchMapping("/stock")
    public Stock updateStock(@RequestBody Stock stock) {
        stock.setPrice(liveService.getStockPrice(stock.getSymbol()));
        return stockService.updateStock(stock);
    }

    @DeleteMapping("/stock/{id}")
    public void deleteStock(@PathVariable UUID id) {
        stockService.deleteStock(id);
    }

    @GetMapping("/stock")
    public List<Stock> getAllStocks() {
        return stockService.getAllStocks();
    }

    @GetMapping("/livePrice/{symbol}")
    public Double getPriceBySymbol(@PathVariable String symbol) {
       return liveService.getStockPrice(symbol);

    }
}
