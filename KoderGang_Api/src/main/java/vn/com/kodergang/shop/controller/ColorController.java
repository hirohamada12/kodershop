package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.data.request.DeleteColorRequest;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.entity.Color;
import vn.com.kodergang.shop.entity.MessagesResponse;
import vn.com.kodergang.shop.service.impl.ColorServiceImpl;

import java.util.List;

@RequestMapping("/" + Constant.API_PATH.COLOR)
@RestController
public class ColorController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private ColorServiceImpl mColorService;

    @GetMapping("/getAllColor")
    public ResponseEntity<List> getAllColor() {
        ResponseEntity responseEntity = new ResponseEntity(mColorService.getAllColor(), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/saveColor")
    @Transactional
    public ResponseEntity save(@RequestBody Color color) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mColorService.save(color);
            return new ResponseEntity(mess, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }

    }

    @PostMapping("/deleteColor")
    @Transactional
    public ResponseEntity delete(@RequestBody DeleteColorRequest request) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mColorService.delete(request.getColorId());
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
