package vn.com.kodergang.common.generics;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface GenericService<T, ID extends Serializable> {
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
