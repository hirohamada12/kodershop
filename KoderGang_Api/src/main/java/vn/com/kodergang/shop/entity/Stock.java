package vn.com.kodergang.shop.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "STOCK")
public class Stock {
    @Id
    @Column(name = "STOCK_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer stockId;
    @Column(name = "STOCK_CODE")
    private String stockCode;
    @Column(name = "PRODUCT_ID")
    private Integer productId;
    @Column(name = "QUANTITY")
    private Integer quantity;
    @Column(name = "CREATE_TIME")
    private Date createTime;
    @Column(name = "STATUS")
    private String status;

    public Integer getStockId() {
        return stockId;
    }

    public void setStockId(Integer stockId) {
        this.stockId = stockId;
    }

    public String getStockCode() {
        return stockCode;
    }

    public void setStockCode(String stockCode) {
        this.stockCode = stockCode;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
