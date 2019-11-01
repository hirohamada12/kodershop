package vn.com.kodergang.shop.entity;

import javax.persistence.*;

@Entity
@Table(name = "ORDER_DETAIL")
public class OrderDetail {
    @Id
    @Column(name = "ORDER_DETAIL_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderDetailId;
    @Column(name = "ORDERS_ID")
    private Integer orderId;
    @Column(name = "PRODUCT_ID")
    private Integer productId;
    @Column(name = "QUANTITY")
    private Integer quantity;

    public Integer getOrderDetailId() {
        return orderDetailId;
    }

    public void setOrderDetailId(Integer orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
