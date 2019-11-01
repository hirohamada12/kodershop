package vn.com.kodergang.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.shop.dao.repo.StockRepo;
import vn.com.kodergang.shop.entity.Stock;
import vn.com.kodergang.shop.service.StockService;

import java.util.List;

@Service("StockServiceImpl")
@Transactional
public class StockServiceImpl implements StockService {
    @Autowired
    private StockRepo mStockRepo;

    @Override
    public List<Stock> getAllStock() {
        return mStockRepo.findAll();
    }

    @Override
    public List<Stock> search(String term) {
        return null;
    }

    @Override
    public void save(Stock stock) {
        mStockRepo.save(stock);
    }

    @Override
    public void delete(Integer id) {
        mStockRepo.delete(id);
    }
}
