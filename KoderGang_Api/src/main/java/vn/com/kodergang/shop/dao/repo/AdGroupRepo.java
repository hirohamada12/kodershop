package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.AdGroup;

@Repository
public interface AdGroupRepo extends JpaRepository<AdGroup, Integer> {

}
