package vn.com.kodergang.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.shop.dao.repo.AdGroupRepo;
import vn.com.kodergang.shop.entity.AdGroup;
import vn.com.kodergang.shop.service.AdGroupService;

import java.util.List;

@Service("AdGroupServiceImpl")
@Transactional
public class AdGroupServiceImpl implements AdGroupService {

    @Autowired
    private AdGroupRepo mAdGroupRepo;

    @Override
    public List<AdGroup> getAllAdGroup() {
        return mAdGroupRepo.findAll();
    }

    @Override
    public List<AdGroup> search(String term) {
        return null;
    }

    @Override
    public void save(AdGroup adGroup) {
        mAdGroupRepo.save(adGroup);
    }

    @Override
    public void delete(Integer id) {
        mAdGroupRepo.delete(id);
    }
}
