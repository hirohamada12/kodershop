package vn.com.kodergang.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.shop.dao.repo.ProductRepo;
import vn.com.kodergang.shop.entity.Product;
import vn.com.kodergang.shop.service.ProductService;

import java.util.List;

@Service("ProductServiceImpl")
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepo mProductRepo;

    @Override
    public List<Product> getAllProduct() {
        return mProductRepo.findAll();
    }

    @Override
    public List<Product> search(String term) {
        return null;
    }

    @Override
    public void save(Product product) {
        mProductRepo.save(product);
    }

    @Override
    public void delete(Integer id) {
        mProductRepo.delete(id);
    }

    @Override
    public void setUpdateStatus(Integer productId) {
        mProductRepo.setUpdateStatus(productId);
    }
}
