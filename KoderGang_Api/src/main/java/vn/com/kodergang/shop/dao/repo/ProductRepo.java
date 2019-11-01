package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
    @Query("update Product p set p.status = 'ACTIVE' where p.productId = ?1")
    void setUpdateStatus(Integer id);
}
