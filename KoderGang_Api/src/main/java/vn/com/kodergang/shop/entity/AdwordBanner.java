package vn.com.kodergang.shop.entity;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ADWORD_BANNER")
public class AdwordBanner {
    @Id
    @Column(name = "ADWORD_BANNER_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer adwordBannerId;
    @Column(name = "ADWORD_BANNER_TITLE")
    private String adwordBannerTitle;
    @Column(name = "ADWORD_BANNER_IMAGE")
    private String adwordBannerImage;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "CREATE_TIME")
    private Date createTime;

    public Integer getAdwordBannerId() {
        return adwordBannerId;
    }

    public void setAdwordBannerId(Integer adwordBannerId) {
        this.adwordBannerId = adwordBannerId;
    }

    public String getAdwordBannerTitle() {
        return adwordBannerTitle;
    }

    public void setAdwordBannerTitle(String adwordBannerTitle) {
        this.adwordBannerTitle = adwordBannerTitle;
    }

    public String getAdwordBannerImage() {
        return adwordBannerImage;
    }

    public void setAdwordBannerImage(String adwordBannerImage) {
        this.adwordBannerImage = adwordBannerImage;
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
}
