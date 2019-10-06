package vn.com.kodergang.shop.dao;

import vn.com.kodergang.common.generics.GenericDao;
import vn.com.kodergang.shop.entity.AdUser;

public interface AdUserDao extends GenericDao<AdUser, Integer> {
    AdUser getByCondition(AdUser adUser);
    boolean existsEmail(String email,String userName);
    boolean existsUserName(String userName);
    AdUser getUserByUserName(String userName);
}
