package vn.com.kodergang.shop.service;

import vn.com.kodergang.shop.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProduct();

    List<Product> search(String term);

    void save(Product product);

    void delete(Integer id);

    void setUpdateStatus(Integer id);
}
