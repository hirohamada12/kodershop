package vn.com.kodergang.shop.service;

import vn.com.kodergang.shop.entity.Size;

import java.util.List;

public interface SizeService {
    List<Size> getAllSize();

    List<Size> search(String term);

    void save(Size size);

    void delete(Integer id);
}
