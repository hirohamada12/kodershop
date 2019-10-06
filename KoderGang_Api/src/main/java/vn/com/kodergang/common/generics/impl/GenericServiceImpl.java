package vn.com.kodergang.common.generics.impl;

import vn.com.kodergang.common.generics.GenericDao;
import vn.com.kodergang.common.generics.GenericService;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class GenericServiceImpl<T, ID extends Serializable> implements GenericService<T, ID> {

    private GenericDao<T, ID> genericDao;

    public GenericServiceImpl() {
    }

    public GenericServiceImpl(GenericDao<T, ID> genericDao) {
        this.genericDao = genericDao;
    }

    public T findOne(ID id) {
        return genericDao.findOne(id);
    }

    public Iterable<T> findAll(Iterable<ID> ids) {
        return genericDao.findAll(ids);
    }

    public T save(T obj) {
        return genericDao.save(obj);
    }

    public void save(Iterable<T> lst) {
        genericDao.save(lst);
    }

    public void delete(ID key) {
        genericDao.delete(key);
    }

    public void delete(Iterable<T> lst) {
        genericDao.delete(lst);
    }

    public void deleteAll() {
        genericDao.deleteAll();
    }

    public boolean exists(ID key) {
        return genericDao.exists(key);
    }

    public List<T> getByCondition(Map map) {
        return genericDao.getByCondition(map);
    }

    public boolean existsCode(String code) {
        return genericDao.existsCode(code);
    }

    @Override
    public boolean checkConstraint(Integer id) {
        return genericDao.checkConstraint(id);
    }
}
