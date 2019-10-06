package vn.com.kodergang.shop.dao;

import vn.com.kodergang.common.generics.GenericDao;
import vn.com.kodergang.shop.entity.AdPermission;

import java.util.Map;

public interface AdPermissionDao extends GenericDao<AdPermission, Integer> {
    Map getPermissionByUser(int userId);
}
