package vn.com.kodergang.shop.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vn.com.kodergang.data.request.DeleteStockRequest;
import vn.com.kodergang.shop.Constant;
import vn.com.kodergang.shop.entity.MessagesResponse;
import vn.com.kodergang.shop.entity.Stock;
import vn.com.kodergang.shop.service.impl.StockServiceImpl;

import java.util.List;

@RequestMapping("/" + Constant.API_PATH.STOCK)
@RestController
public class StockController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private StockServiceImpl mStockService;

    @GetMapping("/getAllStock")
    public ResponseEntity<List> getAllStock() {
        ResponseEntity responseEntity = new ResponseEntity(mStockService.getAllStock(), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/saveStock")
    @Transactional
    public ResponseEntity save(@RequestBody Stock stock) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mStockService.save(stock);
            return new ResponseEntity(mess, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity(mess.error(e), HttpStatus.OK);
        } finally {
            logger.info(" user: "
                    + SecurityContextHolder.getContext().getAuthentication().getName() + Constant.LOG.END);
        }

    }

    @PostMapping("/deleteStock")
    @Transactional
    public ResponseEntity delete(@RequestBody DeleteStockRequest request) {
        MessagesResponse mess = new MessagesResponse();
        try {
            mStockService.delete(request.getStockId());
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
