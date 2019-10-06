package vn.com.kodergang.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.common.generics.GenericDao;
import vn.com.kodergang.common.generics.impl.GenericServiceImpl;
import vn.com.kodergang.shop.dao.AdPermissionDao;
import vn.com.kodergang.shop.entity.AdPermission;
import vn.com.kodergang.shop.service.AdPermissionService;

import java.util.List;
import java.util.Map;

@Service("AdPermissionServiceImpl")
@Transactional
public class AdPermissionServiceImpl extends GenericServiceImpl<AdPermission, Integer> implements AdPermissionService {
    @Autowired
    AdPermissionDao dao;

    public AdPermissionServiceImpl() {
    }

    @Autowired
    public AdPermissionServiceImpl(@Qualifier("AdPermissionDaoImpl") GenericDao<AdPermission, Integer> genericDao) {
        super(genericDao);
        this.dao = (AdPermissionDao) genericDao;
    }
}
