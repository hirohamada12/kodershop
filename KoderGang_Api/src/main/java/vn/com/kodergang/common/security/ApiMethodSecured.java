package vn.com.kodergang.common.security;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.security.access.expression.SecurityExpressionRoot;
import org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import vn.com.kodergang.common.config.ApplicationContextProvider;
import vn.com.kodergang.common.utils.StringUtil;
import vn.com.kodergang.shop.entity.AdPermission;
import vn.com.kodergang.shop.service.AdPermissionService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ApiMethodSecured extends SecurityExpressionRoot implements MethodSecurityExpressionOperations {
    private Logger logger = org.apache.logging.log4j.LogManager.getLogger(ApiMethodSecured.class);

    private Object filterObject;
    private Object returnObject;

    AdPermissionService adPermissionService = ApplicationContextProvider.getBean("AdPermissionServiceImpl", AdPermissionService.class);

    public ApiMethodSecured(Authentication authentication) {
        super(authentication);
    }

    public boolean apiSecured(HttpHeaders header, String permission, String action) {
        if (permission == null) {//login, logout
            return true;
        }
        boolean isAllow = false;
        try {
            UsernamePasswordAuthenticationToken user = (UsernamePasswordAuthenticationToken) this.getAuthentication();
            String[] arr = StringUtil.nvl(user.getCredentials(), "").split("\\|");
            String userId = arr.length > 1 ? arr[0] : "0";
            if ("0".equalsIgnoreCase(userId)) {
                return isAllow;
            }
            Map<String, String> map = new HashMap();
            map.put("userId", userId);
            map.put("permission", permission);
            List<AdPermission> lst = adPermissionService.getByCondition(map);
            if (!lst.isEmpty()) {
                String sessionId = arr.length > 1 ? arr[1] : "0";
                String requestPair = (header.containsKey("request_pair") && !header.get("request_pair").isEmpty())
                        ? header.get("request_pair").get(0) : "";
                logAction(lst.get(0), sessionId, userId, requestPair);
                isAllow = true;
            }
        } catch (Exception e) {
            logger.error(e.toString(), e);
            throw e;
        }
        return isAllow;
    }

    public void logAction(AdPermission obj, String sessionId, String userId, String requestPair) {
        try {
            logger.info("=========== BEGIN LOG ACTION ==============");
            logger.info("SessionId: " + sessionId);
            logger.info("UserId: " + userId);
            logger.info("RequestPair: " + requestPair);
            logger.info("=========== END LOG ACTION ==============");
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }
    }

    @Override
    public Object getFilterObject() {
        return this.filterObject;
    }

    @Override
    public Object getReturnObject() {
        return this.returnObject;
    }

    @Override
    public Object getThis() {
        return this;
    }

    @Override
    public void setFilterObject(Object obj) {
        this.filterObject = obj;
    }

    @Override
    public void setReturnObject(Object obj) {
        this.returnObject = obj;
    }

}
