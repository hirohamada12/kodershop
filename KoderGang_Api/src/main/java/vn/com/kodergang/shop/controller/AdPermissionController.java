package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.service.AdPermissionService;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/" + Constant.API_PATH.AD_PERMISSON)
public class AdPermissionController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    AdPermissionService service;

}
