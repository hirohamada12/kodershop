package vn.com.kodergang.common.generics.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import vn.com.kodergang.common.generics.GenericDao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
@SuppressWarnings("unchecked")
public class GenericDaoImpl<T, ID extends Serializable> implements GenericDao<T, ID>  {
    @Autowired
    protected NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Autowired
    protected JdbcTemplate jdbcTemplate;

    @Autowired
    protected CrudRepository<T, ID> repository;

    public CrudRepository<T, ID> getRepo() {
        return repository;
    }

    public T findOne(ID id) {
        return repository.findOne(id);
    }

    public Iterable<T> findAll(Iterable<ID> ids) {
        return repository.findAll(ids);
    }

    public T save(T obj) {
        return repository.save(obj);
    }

    public void save(Iterable<T> lst) {
        repository.save(lst);
    }

    public void delete(ID key) {
        repository.delete(key);
    }

    public void delete(Iterable<T> lst) {
        repository.delete(lst);
    }

    public void deleteAll() {
        repository.deleteAll();
    }

    public boolean exists(ID key) {
        return repository.exists(key);
    }

    public List<T> getByCondition(Map map) {
        return null;
    }

    public List<T> getByCondition(Map map, String sql, Class mappedClass) {
        return namedParameterJdbcTemplate.query(sql, map, new BeanPropertyRowMapper(mappedClass));
    }

    public boolean existsCode(String code) {
        return false;
    }

    @Override
    public boolean checkConstraint(Integer id) {
        return false;
    }
}
