package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.AdUser;

@Repository
public interface AdUserRepo extends CrudRepository<AdUser, Integer> {
    @Query("select u from AdUser u where u.username = :#{#adUser.username} and u.pass = :#{#adUser.pass}")
    AdUser getByCondition(@Param("adUser") AdUser adUser);

}
