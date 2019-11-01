package vn.com.kodergang.shop.dao.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.shop.entity.Categorory;

import java.util.List;

@Repository
public interface CategororyRepo extends JpaRepository<Categorory, Integer> {
    @Query("select c from Categorory c where c.categororyName Like %?1%")
    List<Categorory> searchByName(String name);

}
