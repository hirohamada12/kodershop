package vn.com.kodergang.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.shop.dao.repo.CategororyDetailRepo;
import vn.com.kodergang.shop.entity.Categorory;
import vn.com.kodergang.shop.entity.CategororyDetail;
import vn.com.kodergang.shop.service.CategororyDetailService;
import vn.com.kodergang.shop.service.CategororyService;

import java.util.List;

@Service("CategororyDetailServiceImpl")
@Transactional
public class CategororyDetailServiceImpl implements CategororyDetailService {
    @Autowired
    private CategororyDetailRepo mCategororyDetailRepo;


    @Override
    public List<CategororyDetail> getAllCategororyDetail() {
        return mCategororyDetailRepo.findAll();
    }

    @Override
    public List<CategororyDetail> search(String term) {
        return null;
    }

    @Override
    public void save(CategororyDetail categororyDetail) {
        mCategororyDetailRepo.save(categororyDetail);
    }

    @Override
    public void delete(Integer id) {
        mCategororyDetailRepo.delete(id);
    }
}