package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.data.request.DeleteCategoryRequest;
import vn.com.kodergang.data.request.SearchCategoryRequest;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.entity.Categorory;
import vn.com.kodergang.shop.entity.MessagesResponse;
import vn.com.kodergang.shop.service.impl.CategororyServiceImpl;

import java.util.List;

@RequestMapping("/" + Constant.API_PATH.CATEGORORY)
@RestController
public class CategororyController {
    org.apache.logging.log4j.Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private CategororyServiceImpl mCategororyService;

    @GetMapping("/getAllCategorory")
    public ResponseEntity<List> getAllCategory() {
        ResponseEntity responseEntity = new ResponseEntity(mCategororyService.getAllCatogory(), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/saveCategorory")
    @Transactional
    public ResponseEntity save(@RequestBody Categorory categorory) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mCategororyService.save(categorory);
            return new ResponseEntity(mess, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }

    }

    @PostMapping("/searchCategory")
    public ResponseEntity searchCategory(@RequestBody SearchCategoryRequest request) {

        if (request == null || request.getCategoryName() == null) {
            return new ResponseEntity(mCategororyService.getAllCatogory(), HttpStatus.OK);
        } else {
            return new ResponseEntity(mCategororyService.search(request.getCategoryName()), HttpStatus.OK);
        }

    }

    @PostMapping("/deleteCategorory")
    @Transactional
    public ResponseEntity delete(@RequestBody DeleteCategoryRequest request) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mCategororyService.delete(request.getCategororyId());
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
