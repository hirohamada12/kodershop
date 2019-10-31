package vn.com.kodergang.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.shop.dao.repo.CategororyRepo;
import vn.com.kodergang.shop.entity.Categorory;
import vn.com.kodergang.shop.service.CategororyService;

import java.util.List;

@Service("CategororyServiceImpl")
@Transactional
public class CategororyServiceImpl implements CategororyService {
    @Autowired
    private CategororyRepo mCategororyRepo;
    @Override
    public List<Categorory> getAllCatogory() {
        return mCategororyRepo.findAll();
    }

    @Override
    public List<Categorory> search(String term) {
        return mCategororyRepo.searchByName(term);
    }

    @Override
    public void save(Categorory categorory) {
        mCategororyRepo.save(categorory);
    }

    @Override
    public void delete(Integer id) {
        mCategororyRepo.delete(id);
    }
}