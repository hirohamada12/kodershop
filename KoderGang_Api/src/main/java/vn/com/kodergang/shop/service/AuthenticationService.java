package vn.com.kodergang.shop.service;

import org.springframework.http.HttpHeaders;
import vn.com.kodergang.shop.entity.AdUser;
import vn.com.kodergang.shop.entity.AuthenticationOutput;

public interface AuthenticationService {
    AuthenticationOutput login(HttpHeaders headers, AdUser identity);
}
