package vn.com.kodergang.shop.service;

import vn.com.kodergang.shop.entity.Stock;

import java.util.List;

public interface StockService {
    List<Stock> getAllStock();

    List<Stock> search(String term);

    void save(Stock stock);

    void delete(Integer id);
}
