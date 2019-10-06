package vn.com.kodergang.common.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;
import vn.com.kodergang.common.security.ApiMethodSecuredHandler;
/**
 * ANHVTN11
 * Created by nhatanhvt123@gmail.com
 */
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration {
    @Override
    protected MethodSecurityExpressionHandler createExpressionHandler() {
        ApiMethodSecuredHandler expressionHandler = new ApiMethodSecuredHandler();
        return expressionHandler;
    }
}
