package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.VoucherSale;
@Repository
public interface VoucherSaleRepo extends CrudRepository<VoucherSale, Integer> {
}
