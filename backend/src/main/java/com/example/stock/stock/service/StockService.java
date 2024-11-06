package com.example.stock.stock.service;

import com.example.stock.stock.model.Stock;
import com.example.stock.stock.repository.StockRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StockService {

    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Optional<Stock> getStockById(UUID id) {
        return stockRepository.findById(id);
    }



    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Stock updateStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public void deleteStock(UUID id) {
         stockRepository.deleteById(id);
    }
}
