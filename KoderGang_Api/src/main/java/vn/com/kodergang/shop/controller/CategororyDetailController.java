package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.data.request.DeleteCategororyDetailRequest;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.entity.CategororyDetail;
import vn.com.kodergang.shop.entity.MessagesResponse;
import vn.com.kodergang.shop.service.impl.CategororyDetailServiceImpl;

import java.util.List;

@RequestMapping("/" + Constant.API_PATH.CATEGORORY_DETAIL)
@RestController
public class CategororyDetailController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private CategororyDetailServiceImpl mCategororyDetailService;

    @GetMapping("/getAllCategororyDetail")
    public ResponseEntity<List> getAllCategororyDetail() {
        ResponseEntity responseEntity = new ResponseEntity(mCategororyDetailService.getAllCategororyDetail(), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/saveCategororyDetail")
    @Transactional
    public ResponseEntity save(@RequestBody CategororyDetail categororyDetail) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mCategororyDetailService.save(categororyDetail);
            return new ResponseEntity(mess, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }

    }

    @PostMapping("/deleteCategororyDetail")
    @Transactional
    public ResponseEntity delete(@RequestBody DeleteCategororyDetailRequest request) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mCategororyDetailService.delete(request.getCategororyDetailId());
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
