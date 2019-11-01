package vn.com.kodergang.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.shop.dao.repo.SizeRepo;
import vn.com.kodergang.shop.entity.Size;
import vn.com.kodergang.shop.service.SizeService;

import java.util.List;

@Service("SizeServiceImpl")
@Transactional
public class SizeServiceImpl implements SizeService {

    @Autowired
    private SizeRepo mSizeRepo;

    @Override
    public List<Size> getAllSize() {
        return mSizeRepo.findAll();
    }

    @Override
    public List<Size> search(String term) {
        return null;
    }

    @Override
    public void save(Size size) {
        mSizeRepo.save(size);
    }

    @Override
    public void delete(Integer id) {
        mSizeRepo.delete(id);
    }
}
