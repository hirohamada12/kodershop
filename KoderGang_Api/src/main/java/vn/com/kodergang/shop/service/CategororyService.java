package vn.com.kodergang.shop.service;

import vn.com.kodergang.shop.entity.Categorory;

import java.util.List;

public interface CategororyService {
    List<Categorory> getAllCatogory();

    List<Categorory> search(String term);

    void save(Categorory categorory);

    void delete(Integer id);
}
