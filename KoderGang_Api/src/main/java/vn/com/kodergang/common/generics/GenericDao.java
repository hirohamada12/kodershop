package vn.com.kodergang.common.generics;
import org.springframework.data.repository.CrudRepository;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface GenericDao<T, ID extends Serializable>{
    CrudRepository<T, ID> getRepo();
    T findOne(ID id);
    Iterable<T> findAll(Iterable<ID> ids);
    T save(T obj);
    void save(Iterable<T> lst);
    void delete(ID key);
    void delete(Iterable<T> lst);
    void deleteAll();
    boolean exists(ID key);
    List<T> getByCondition(Map map);
    boolean existsCode(String code);
    boolean checkConstraint(Integer id);
}
