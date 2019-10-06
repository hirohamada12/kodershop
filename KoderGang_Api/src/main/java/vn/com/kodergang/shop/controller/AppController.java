package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.common.utils.StringUtil;
import vn.com.kodergang.common.websocket.SocketServer;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.entity.AdUser;
import vn.com.kodergang.shop.entity.AuthenticationOutput;
import vn.com.kodergang.shop.entity.MessagesResponse;
import vn.com.kodergang.shop.service.AuthenticationService;

import java.util.Map;


@CrossOrigin(origins = "*")
@RestController
public class AppController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    AuthenticationService authenticationService;

    @Autowired
    @Qualifier("socketServer")
    SocketServer socketServer;


    @RequestMapping("/")
    public String welcome(Map<String, Object> model) {
        return "Welcome to koderShop Api";
    }

    @PreAuthorize("apiSecured(#headers, null, 'login')")
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public @ResponseBody
    ResponseEntity login(@RequestHeader HttpHeaders headers, @RequestBody AdUser identity) {
        logger.info(" user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.BEGIN);
        MessagesResponse mess = new MessagesResponse();
        try {
            AuthenticationOutput out = authenticationService.login(headers, identity);
            if (out != null) {
                mess.setData(out);
            } else {
                mess.setCode(Constant.RESPONSE_CODE.LOGIN_FAIL);
                mess.setStatus(Constant.RESPONSE_STATUS.ERROR);
                return new ResponseEntity(mess, HttpStatus.OK);
            }
            HttpHeaders responseHeaders = new HttpHeaders();
            responseHeaders.set("session_id", StringUtil.nvl(out.getSessionId(), ""));
            responseHeaders.set("user_id", StringUtil.nvl(out.getUserId(), ""));
            return new ResponseEntity(mess, responseHeaders, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/logout")
    public ResponseEntity<?> logoutApi() {
        return new ResponseEntity(new MessagesResponse(), HttpStatus.OK);
    }
}
