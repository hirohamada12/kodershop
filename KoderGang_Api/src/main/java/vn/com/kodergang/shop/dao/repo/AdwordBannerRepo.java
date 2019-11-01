package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.AdwordBanner;
@Repository
public interface AdwordBannerRepo extends CrudRepository<AdwordBanner, Integer> {
}
