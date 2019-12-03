package com.bali.common;


/**
 * �ѹ��� entity
 */

public class BuyList implements java.io.Serializable {

    // Fields    

	private static final long serialVersionUID = -6532693625945261683L;
	private Integer buyListId;  //id
     private Integer productNum;//商品数量
    private Integer productId;//商品id
    private Integer userId; //用户id
    private UserInfo userInfo;  //对应用户
    private Product product;//对应商品
    private String productName;  //商品名称
    private String picture;//图片
    private Float price; //价钱
    private String childname;  //分类名称

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getBuyListId() {
        return buyListId;
    }

    public BuyList setBuyListId(Integer buyListId) {
        this.buyListId = buyListId;
        return this;
    }

    public Integer getProductNum() {
        return productNum;
    }

    public BuyList setProductNum(Integer productNum) {
        this.productNum = productNum;
        return this;
    }

    public Integer getProductId() {
        return productId;
    }

    public BuyList setProductId(Integer productId) {
        this.productId = productId;
        return this;
    }

    public Integer getUserId() {
        return userId;
    }

    public BuyList setUserId(Integer userId) {
        this.userId = userId;
        return this;
    }

    public UserInfo getUserInfo() {
        return userInfo;
    }

    public BuyList setUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }

    public Product getProduct() {
        return product;
    }

    public BuyList setProduct(Product product) {
        this.product = product;
        return this;
    }

    public String getProductName() {
        return productName;
    }

    public BuyList setProductName(String productName) {
        this.productName = productName;
        return this;
    }

    public String getPicture() {
        return picture;
    }

    public BuyList setPicture(String picture) {
        this.picture = picture;
        return this;
    }

    public Float getPrice() {
        return price;
    }

    public BuyList setPrice(Float price) {
        this.price = price;
        return this;
    }

    public String getChildname() {
        return childname;
    }

    public BuyList setChildname(String childname) {
        this.childname = childname;
        return this;
    }

    public BuyList() {
    }

    public BuyList(Integer buyListId, Integer productNum, Integer productId, Integer userId, UserInfo userInfo, Product product, String productName, String picture, Float price, String childname) {
        this.buyListId = buyListId;
        this.productNum = productNum;
        this.productId = productId;
        this.userId = userId;
        this.userInfo = userInfo;
        this.product = product;
        this.productName = productName;
        this.picture = picture;
        this.price = price;
        this.childname = childname;
    }
}