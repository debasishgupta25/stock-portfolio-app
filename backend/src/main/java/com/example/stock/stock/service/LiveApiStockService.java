package com.example.stock.stock.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class LiveApiStockService {

    private static final String API_KEY = "G34XQD6S9I21JSHG";
    private static final String API_URL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={apikey}}";

    public double getStockPrice(String symbol){
        RestTemplate template = new RestTemplate();
        Map<String,String> params = new HashMap<>();
        params.put("symbol", symbol);
        params.put("apikey",API_KEY);
        params.put("verify","false");

        Map response = template.getForObject(API_URL,Map.class,params);

        if(response!=null && response.containsKey("Global Quote")){
            Map<String,String> globalQuote  = (Map<String, String>) response.get("Global Quote");
            if(globalQuote!=null  && globalQuote.containsKey("05. price")){
                return Double.parseDouble(globalQuote.get("05. price"));
            }
        }
        return 0.0;
    }
}
