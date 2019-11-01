package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.data.request.DeleteGroupRequest;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.entity.AdGroup;
import vn.com.kodergang.shop.entity.MessagesResponse;
import vn.com.kodergang.shop.service.impl.AdGroupServiceImpl;

import java.util.List;

@RequestMapping("/" + Constant.API_PATH.AD_GROUP)
@RestController
public class AdGroupController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private AdGroupServiceImpl mGroupService;

    @GetMapping("/getAllAdGroup")
    public ResponseEntity<List> getAllAdGroup() {
        ResponseEntity responseEntity = new ResponseEntity(mGroupService.getAllAdGroup(), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/saveAdGroup")
    @Transactional
    public ResponseEntity save(@RequestBody AdGroup adGroup) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mGroupService.save(adGroup);
            return new ResponseEntity(mess, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }

    }


    @PostMapping("/deleteAdGroup")
    @Transactional
    public ResponseEntity delete(@RequestBody DeleteGroupRequest request) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mGroupService.delete(request.getGroupId());
            mess.setMessage(Constant.RESPONSE_STATUS.SUCCESS);
            return new ResponseEntity(Constant.RESPONSE_STATUS.SUCCESS, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }

    }
}
