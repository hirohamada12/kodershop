package vn.com.kodergang.shop.entity;

import javax.persistence.*;

@Entity
@Table(name = "COLOR")
public class Color {
    @Id
    @Column(name = "COLOR_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer colorId;
    @Column(name = "COLOR_CODE")
    private String colorCode;
    @Column(name = "COLOR_NAME")
    private String colorName;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "CREATE_TIME")
    private String createTime;
    @Column(name = "STATUS")
    private String status;

    public Integer getColorId() {
        return colorId;
    }

    public void setColorId(Integer colorId) {
        this.colorId = colorId;
    }

    public String getColorCode() {
        return colorCode;
    }

    public void setColorCode(String colorCode) {
        this.colorCode = colorCode;
    }

    public String getColorName() {
        return colorName;
    }

    public void setColorName(String colorName) {
        this.colorName = colorName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
