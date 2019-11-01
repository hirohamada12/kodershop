package vn.com.kodergang.shop.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CATEGORORY")
public class Categorory {
    @Id
    @Column(name = "CATEGORORY_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categororyId;
    @Column(name = "CATEGORORY_CODE")
    private String categororyCode;
    @Column(name = "CATEGORORY_NAME")
    private String categororyName;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "CREATE_TIME")
    private Date createTime;
    @Column(name = "STATUS")
    private String status;
//    @Column(name = "PRODUCT_ID")
//    private Integer productId;

    public Integer getCategororyId() {
        return categororyId;
    }

    public void setCategororyId(Integer categororyId) {
        this.categororyId = categororyId;
    }

    public String getCategororyCode() {
        return categororyCode;
    }

    public void setCategororyCode(String categororyCode) {
        this.categororyCode = categororyCode;
    }

    public String getCategororyName() {
        return categororyName;
    }

    public void setCategororyName(String categororyName) {
        this.categororyName = categororyName;
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
