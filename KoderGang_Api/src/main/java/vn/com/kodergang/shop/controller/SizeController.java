package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.data.request.DeleteSizeRequest;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.entity.MessagesResponse;
import vn.com.kodergang.shop.entity.Size;
import vn.com.kodergang.shop.service.impl.SizeServiceImpl;

import java.util.List;

@RequestMapping("/" + Constant.API_PATH.SIZE)
@RestController
public class SizeController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private SizeServiceImpl mSizeService;

    @GetMapping("/getAllSize")
    public ResponseEntity<List> getAllProduct() {
        ResponseEntity responseEntity = new ResponseEntity(mSizeService.getAllSize(), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/saveSize")
    @Transactional
    public ResponseEntity save(@RequestBody Size size) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mSizeService.save(size);
            return new ResponseEntity(mess, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }
    }

    @PostMapping("/deleteSize")
    @Transactional
    public ResponseEntity delete(@RequestBody DeleteSizeRequest request) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mSizeService.delete(request.getSizeId());
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
