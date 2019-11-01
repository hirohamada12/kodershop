package vn.com.kodergang.shop.entity;

import javax.persistence.*;

@Entity
@Table(name = "BLOG")
public class Blog {
    @Id
    @Column(name = "BLOG_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer blogId;
    @Column(name = "BLOG_TITLE")
    private String blogTitle;
    @Column(name = "BLOG_NAME")
    private String blogName;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "CREATE_TIME")
    private String createTime;

    public Integer getBlogId() {
        return blogId;
    }

    public void setBlogId(Integer blogId) {
        this.blogId = blogId;
    }

    public String getBlogTitle() {
        return blogTitle;
    }

    public void setBlogTitle(String blogTitle) {
        this.blogTitle = blogTitle;
    }

    public String getBlogName() {
        return blogName;
    }

    public void setBlogName(String blogName) {
        this.blogName = blogName;
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
}
