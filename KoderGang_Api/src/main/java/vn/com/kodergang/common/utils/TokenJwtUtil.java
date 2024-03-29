package vn.com.kodergang.common.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security
        .authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

import static java.util.Collections.emptyList;
public class TokenJwtUtil {
    static final long EXPIRATIONTIME = 86_400_000; // 1 day
    static final String SECRET = " 1cb9098042d794386f54b1d083de6a18";//"SecretKeyKoderGang"
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";

    public static String generateJwt(String userId, String username, String sessionId) {
        long expirationTime = EXPIRATIONTIME;
        if ("api_user".equalsIgnoreCase(username)){
            expirationTime = 3_153_600_000_000L;//100 years
        }
        return Jwts.builder()
                .setSubject(username)
                .setId(userId)
                .setAudience(sessionId)
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    public static Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);
        if (token != null) {
            // parse the token.
            Claims claims = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody();
            String user = claims.getSubject();
            String userId = claims.getId();
            String sessionId = claims.getAudience();

            return user != null ?
                    new UsernamePasswordAuthenticationToken(user, userId + "|" + sessionId, emptyList()) :
                    null;
        }
        return null;
    }
}
