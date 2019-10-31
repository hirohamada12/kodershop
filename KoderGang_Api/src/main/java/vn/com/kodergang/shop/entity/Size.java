package vn.com.kodergang.shop.entity;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "SIZE")
public class Size {
    @Id
    @Column(name = "SIZE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sizeId;
    @Column(name = "SIZE_CODE")
    private String sizeCode;
    @Column(name = "SIZE_NAME")
    private String sizeName;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "CREATE_TIME")
    private Date createTime;
    @Column(name = "STATUS")
    private String status;

    public Integer getSizeId() {
        return sizeId;
    }

    public void setSizeId(Integer sizeId) {
        this.sizeId = sizeId;
    }

    public String getSizeCode() {
        return sizeCode;
    }

    public void setSizeCode(String sizeCode) {
        this.sizeCode = sizeCode;
    }

    public String getSizeName() {
        return sizeName;
    }

    public void setSizeName(String sizeName) {
        this.sizeName = sizeName;
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
