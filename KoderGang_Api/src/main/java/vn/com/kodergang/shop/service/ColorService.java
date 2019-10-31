package vn.com.kodergang.shop.service;

import vn.com.kodergang.shop.entity.Color;

import java.util.List;

public interface ColorService {
    List<Color> getAllColor();

    List<Color> search(String term);

    void save(Color color);

    void delete(Integer id);
}
