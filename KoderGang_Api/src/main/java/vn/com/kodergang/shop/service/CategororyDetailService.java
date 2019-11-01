package vn.com.kodergang.shop.service;

import vn.com.kodergang.shop.entity.CategororyDetail;

import java.util.List;

public interface CategororyDetailService {
    List<CategororyDetail> getAllCategororyDetail();

    List<CategororyDetail> search(String term);

    void save(CategororyDetail categororyDetail);

    void delete(Integer id);
}
