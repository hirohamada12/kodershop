package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import vn.com.kodergang.shop.entity.AdUser;

import java.util.List;

public interface AdUserRepo extends CrudRepository<AdUser, Integer> {
    @Query("select u from AdUser u where u.username = :#{#adUser.username} and u.pass = :#{#adUser.pass}")
    List<AdUser> getByCondition(@Param("adUser") AdUser adUser);
}
