package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.Stock;

@Repository
public interface StockRepo extends JpaRepository<Stock, Integer> {
}
