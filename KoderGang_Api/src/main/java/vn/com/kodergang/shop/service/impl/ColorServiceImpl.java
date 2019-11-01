package vn.com.kodergang.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.shop.dao.repo.ColorRepo;
import vn.com.kodergang.shop.entity.Color;
import vn.com.kodergang.shop.service.ColorService;

import java.util.List;

@Service("ColorServiceImpl")
@Transactional
public class ColorServiceImpl implements ColorService {

    @Autowired
    private ColorRepo mColorRepo;

    @Override
    public List<Color> getAllColor() {
        return mColorRepo.findAll();
    }

    @Override
    public List<Color> search(String term) {
        return null;
    }

    @Override
    public void save(Color color) {
        mColorRepo.save(color);
    }

    @Override
    public void delete(Integer id) {
        mColorRepo.delete(id);
    }
}
