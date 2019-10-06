package vn.com.kodergang.shop.dao.impl;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import vn.com.kodergang.common.generics.impl.GenericDaoImpl;
import vn.com.kodergang.shop.dao.AdUserDao;
import vn.com.kodergang.shop.entity.AdUser;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository("AdUserDaoImpl")
public class AdUserDaoImpl extends GenericDaoImpl<AdUser, Integer> implements AdUserDao {
    public AdUser getByCondition(AdUser adUser) {
        // List lst = Lists.newArrayList(((AdUserRepo) getRepo()).getByCondition(adUser));
        String sql = "Select * from ad_user";
        List lst = namedParameterJdbcTemplate.query(sql, new BeanPropertyRowMapper<>(AdUser.class));
        if (!lst.isEmpty()) {
            return (AdUser) lst.get(0);
        }
        return null;
    }

    @Override
    public List<AdUser> getByCondition(Map map) {
        String sql = "select user_id,username,fullname,email,create_time,last_login,phone,status,address from ad_user";
        return namedParameterJdbcTemplate.query(sql, new BeanPropertyRowMapper<>(AdUser.class));
    }

    @Override
    public boolean existsEmail(String email, String userName) {
        Map map = new HashMap();
        map.put("userName", userName);
        map.put("email", email);
        String sql = "select au.EMAIL from AD_USER au where au.STATUS = 'ACTIVE' and upper(au.EMAIL) = upper(:email) and not upper(au.USERNAME)=upper(:userName)";
        List<AdUser> lst = getByCondition(map, sql, AdUser.class);
        if (lst != null && lst.size() > 0) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean existsUserName(String userName) {
        Map map = new HashMap();
        map.put("userName", userName);
        String sql = "select au.USERNAME from AD_USER au where au.STATUS = 'ACTIVE' and upper(au.USERNAME) = upper(:userName) ";
        List<AdUser> lst = getByCondition(map, sql, AdUser.class);
        if (lst != null && lst.size() > 0) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AdUser getUserByUserName(String userName) {
        Map map = new HashMap();
        map.put("userName", userName);
        String sql = "select * from AD_USER au where au.STATUS = 'ACTIVE' and upper(au.USERNAME) = upper(:userName) ";
        List<AdUser> lst = getByCondition(map, sql, AdUser.class);
        if (lst != null && lst.size() > 0) {
            return lst.get(0);
        } else {
            return new AdUser();
        }
    }
}
