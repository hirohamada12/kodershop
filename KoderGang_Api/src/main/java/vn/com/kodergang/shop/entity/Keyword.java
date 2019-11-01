package vn.com.kodergang.shop.entity;

import javax.persistence.*;

@Entity
@Table(name = "KEY_WORD")
public class Keyword {
    @Id
    @Column(name = "KEY_WORD_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer keywordId;
    @Column(name = "KEY_WORD_CODE")
    private String keywordCode;
    @Column(name = "KEY_WORD_NAME")
    private String keywordCName;
    @Column(name = "PRODUCT_ID")
    private Integer productId;

    public Integer getKeywordId() {
        return keywordId;
    }

    public void setKeywordId(Integer keywordId) {
        this.keywordId = keywordId;
    }

    public String getKeywordCode() {
        return keywordCode;
    }

    public void setKeywordCode(String keywordCode) {
        this.keywordCode = keywordCode;
    }

    public String getKeywordCName() {
        return keywordCName;
    }

    public void setKeywordCName(String keywordCName) {
        this.keywordCName = keywordCName;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }
}
