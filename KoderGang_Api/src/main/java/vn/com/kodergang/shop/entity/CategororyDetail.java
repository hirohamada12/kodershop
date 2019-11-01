package vn.com.kodergang.shop.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CATEGORORY_DETAIL")
public class CategororyDetail {
    @Id
    @Column(name = "CATEGORORY_DETAIL_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categororyDetailId;
    @Column(name = "PRODUCT_ID")
    private Integer productId;
    @Column(name = "CATEGORORY_ID")
    private Integer categororyId;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "CREATE_TIME")
    private Date createTime;
    @Column(name = "STATUS")
    private String status;

    public Integer getCategororyDetailId() {
        return categororyDetailId;
    }

    public void setCategororyDetailId(Integer categororyDetailId) {
        this.categororyDetailId = categororyDetailId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getCategororyId() {
        return categororyId;
    }

    public void setCategororyId(Integer categororyId) {
        this.categororyId = categororyId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
