package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.CategororyDetail;
@Repository
public interface CategororyDetailRepo extends JpaRepository<CategororyDetail, Integer> {
}
