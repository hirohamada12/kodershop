package vn.com.kodergang.shop.entity;

import javax.persistence.*;

@Entity
@Table(name = "IMAGE")
public class Image {
    @Id
    @Column(name = "IMAGE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer imageId;
    @Column(name = "PRODUCT_ID")
    private Integer productId;
    @Column(name = "IMAGE_MAIN")
    private String imageMain;
    @Column(name = "IMAGE_THUMBNAIL")
    private String imageThumbnail;
    @Column(name = "IMAGE_THUMBNAIL1")
    private String imageThumbnail1;
    @Column(name = "IMAGE_THUMBNAIL2")
    private String imageThumbnail2;
    @Column(name = "IMAGE_THUMBNAIL3")
    private String imageThumbnail3;
    @Column(name = "IMAGE_THUMBNAIL4")
    private String imageThumbnail4;

    public Integer getImageId() {
        return imageId;
    }

    public void setImageId(Integer imageId) {
        this.imageId = imageId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getImageMain() {
        return imageMain;
    }

    public void setImageMain(String imageMain) {
        this.imageMain = imageMain;
    }

    public String getImageThumbnail() {
        return imageThumbnail;
    }

    public void setImageThumbnail(String imageThumbnail) {
        this.imageThumbnail = imageThumbnail;
    }

    public String getImageThumbnail1() {
        return imageThumbnail1;
    }

    public void setImageThumbnail1(String imageThumbnail1) {
        this.imageThumbnail1 = imageThumbnail1;
    }

    public String getImageThumbnail2() {
        return imageThumbnail2;
    }

    public void setImageThumbnail2(String imageThumbnail2) {
        this.imageThumbnail2 = imageThumbnail2;
    }

    public String getImageThumbnail3() {
        return imageThumbnail3;
    }

    public void setImageThumbnail3(String imageThumbnail3) {
        this.imageThumbnail3 = imageThumbnail3;
    }

    public String getImageThumbnail4() {
        return imageThumbnail4;
    }

    public void setImageThumbnail4(String imageThumbnail4) {
        this.imageThumbnail4 = imageThumbnail4;
    }
}
