package vn.com.kodergang.shop.service;

import vn.com.kodergang.shop.entity.AdGroup;

import java.util.List;

public interface AdGroupService {
    List<AdGroup> getAllAdGroup();

    List<AdGroup> search(String term);

    void save(AdGroup adGroup);

    void delete(Integer id);
}
