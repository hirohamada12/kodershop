package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.data.request.DeleteProductRequest;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.entity.MessagesResponse;
import vn.com.kodergang.shop.entity.Product;
import vn.com.kodergang.shop.service.impl.ProductServiceImpl;

import java.util.List;

@RequestMapping("/" + Constant.API_PATH.PRODUCT)
@RestController
public class ProductController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private ProductServiceImpl mProductService;

    @GetMapping("/getAllProduct")
    public ResponseEntity<List> getAllProduct() {
        ResponseEntity responseEntity = new ResponseEntity(mProductService.getAllProduct(), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/saveProduct")
    @Transactional
    public ResponseEntity save(@RequestBody Product product) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mProductService.save(product);
            return new ResponseEntity(mess, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }

    }

    @PostMapping("/activeStatus")
    @Transactional
    public ResponseEntity updateStatus(@RequestBody Product product) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mProductService.setUpdateStatus(product.getProductId());
            return new ResponseEntity(mess, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }

    }

    @PostMapping("/deleteProduct")
    @Transactional
    public ResponseEntity delete(@RequestBody DeleteProductRequest request) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mProductService.delete(request.getProductId());
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
