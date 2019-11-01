package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.OrderDetail;
@Repository
public interface OrderDetailRepo extends CrudRepository<OrderDetail, Integer> {
}
