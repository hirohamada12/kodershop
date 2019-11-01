package vn.com.kodergang.shop.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TOP_SALE")
public class TopSale {
    @Id
    @Column(name = "TOP_SALE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer topSaleId;
    @Column(name = "PRODUCT_ID")
    private Integer productId;
    @Column(name = "CREATE_TIME")
    private Date createTime;
    @Column(name = "STATUS")
    private String status;

    public Integer getTopSaleId() {
        return topSaleId;
    }

    public void setTopSaleId(Integer topSaleId) {
        this.topSaleId = topSaleId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
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
