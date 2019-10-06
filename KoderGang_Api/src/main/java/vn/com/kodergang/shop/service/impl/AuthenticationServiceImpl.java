package vn.com.kodergang.shop.service.impl;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.com.kodergang.common.utils.StringUtil;
import vn.com.kodergang.common.utils.TokenJwtUtil;
import vn.com.kodergang.shop.dao.AdPermissionDao;
import vn.com.kodergang.shop.dao.AdSessionDao;
import vn.com.kodergang.shop.dao.AdUserDao;
import vn.com.kodergang.shop.entity.AdSession;
import vn.com.kodergang.shop.entity.AdUser;
import vn.com.kodergang.shop.entity.AuthenticationOutput;
import vn.com.kodergang.shop.service.AuthenticationService;

@Service("AuthenticationServiceImpl")
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService {
    Logger logger = LogManager.getLogger(getClass());

    @Autowired
    AdUserDao adUserDao;

    @Autowired
    AdPermissionDao adPermissionDao;

    @Autowired
    AdSessionDao adSessionDao;

    public AuthenticationOutput login(HttpHeaders headers, AdUser identity) {
        identity.setPass(StringUtil.encryptMd5(identity.getPass()));
        AdUser adUser = adUserDao.getByCondition(identity);
        if (adUser != null) {
            AdSession adSession = null;
            try {
                String remoteAddress = headers.containsKey("X-Forwarded-For") ? headers.get("X-Forwarded-For").toString() : "";
                AdSession sessionSave = new AdSession(adUser.getUserId(), remoteAddress);
                adSession = adSessionDao.save(sessionSave);
            } catch (Exception e) {
                logger.error(e.toString(), e);
            }
            String token = TokenJwtUtil.generateJwt(
                    adUser.getUserId().toString(), adUser.getUsername(), adSession == null ? "" : adSession.getSessionId().toString());
            AuthenticationOutput output = new AuthenticationOutput();
            output.setUserId(adUser.getUserId());
            output.setSessionId(adSession.getSessionId());
            output.setFullname(adUser.getFullname());
            output.setUsername(adUser.getUsername());
            output.setToken(token);
            output.setPermission(adPermissionDao.getPermissionByUser(adUser.getUserId()));
            return output;
        }
        return null;
    }
}
