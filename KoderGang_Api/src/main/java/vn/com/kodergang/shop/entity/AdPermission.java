package vn.com.kodergang.shop.entity;import javax.persistence.*;@Entity@Table(name = "AD_PERMISSION")public class AdPermission {    @Id    @Column(name = "PERMISSION_ID")    @GeneratedValue(strategy = GenerationType.IDENTITY)    private Integer permissionId;    @Column(name = "CODE")    private Integer code;    @Column(name = "NAME")    private Integer name;    @Column(name = "USER_ID")    private Integer userId;    @Column(name = "STATUS")    private String status;    public Integer getPermissionId() {        return permissionId;    }    public void setPermissionId(Integer permissionId) {        this.permissionId = permissionId;    }    public Integer getCode() {        return code;    }    public void setCode(Integer code) {        this.code = code;    }    public Integer getName() {        return name;    }    public void setName(Integer name) {        this.name = name;    }    public String getStatus() {        return status;    }    public void setStatus(String status) {        this.status = status;    }}