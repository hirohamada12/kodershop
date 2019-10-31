package vn.com.kodergang.shop.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "VOUCHER_SALE")
public class VoucherSale {
    @Id
    @Column(name = "VOUCHER_SALE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer voucherSaleId;
    @Column(name = "VOUCHER_SALE_CODE")
    private String voucherSaleCode;
    @Column(name = "VOUCHER_SALE_NAME")
    private String voucherSaleName;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "CREATE_TIME")
    private Date createTime;
    @Column(name = "FROME_TIME")
    private Date fromeTime;
    @Column(name = "TO_TIME")
    private Date toTime;
    @Column(name = "STATUS")
    private String status;

    public Integer getVoucherSaleId() {
        return voucherSaleId;
    }

    public void setVoucherSaleId(Integer voucherSaleId) {
        this.voucherSaleId = voucherSaleId;
    }

    public String getVoucherSaleCode() {
        return voucherSaleCode;
    }

    public void setVoucherSaleCode(String voucherSaleCode) {
        this.voucherSaleCode = voucherSaleCode;
    }

    public String getVoucherSaleName() {
        return voucherSaleName;
    }

    public void setVoucherSaleName(String voucherSaleName) {
        this.voucherSaleName = voucherSaleName;
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

    public Date getFromeTime() {
        return fromeTime;
    }

    public void setFromeTime(Date fromeTime) {
        this.fromeTime = fromeTime;
    }

    public Date getToTime() {
        return toTime;
    }

    public void setToTime(Date toTime) {
        this.toTime = toTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
