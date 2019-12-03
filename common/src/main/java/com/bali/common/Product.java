package com.bali.common;

import java.util.HashSet;
import java.util.Set;

/**
 * Product entity. @author MyEclipse Persistence Tools
 */

public class Product implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -6890220931649973593L;
	private Integer productId;
	private ChildType childType;
	private String productName;
	private Double price;
	private String picture;
	private String information;
	private String useway;
	private Integer productTypeId;
	private Set<BuyList> buyLists = new HashSet<BuyList>(0);

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Integer getProductId() {
		return productId;
	}

	public Product setProductId(Integer productId) {
		this.productId = productId;
		return this;
	}

	public ChildType getChildType() {
		return childType;
	}

	public Product setChildType(ChildType childType) {
		this.childType = childType;
		return this;
	}

	public String getProductName() {
		return productName;
	}

	public Product setProductName(String productName) {
		this.productName = productName;
		return this;
	}

	public Double getPrice() {
		return price;
	}

	public Product setPrice(Double price) {
		this.price = price;
		return this;
	}

	public String getPicture() {
		return picture;
	}

	public Product setPicture(String picture) {
		this.picture = picture;
		return this;
	}

	public String getInformation() {
		return information;
	}

	public Product setInformation(String information) {
		this.information = information;
		return this;
	}

	public String getUseway() {
		return useway;
	}

	public Product setUseway(String useway) {
		this.useway = useway;
		return this;
	}

	public Integer getProductTypeId() {
		return productTypeId;
	}

	public Product setProductTypeId(Integer productTypeId) {
		this.productTypeId = productTypeId;
		return this;
	}

	public Set<BuyList> getBuyLists() {
		return buyLists;
	}

	public Product setBuyLists(Set<BuyList> buyLists) {
		this.buyLists = buyLists;
		return this;
	}

	public Product() {
	}

	public Product(Integer productId, ChildType childType, String productName, Double price, String picture, String information, String useway, Integer productTypeId, Set<BuyList> buyLists) {
		this.productId = productId;
		this.childType = childType;
		this.productName = productName;
		this.price = price;
		this.picture = picture;
		this.information = information;
		this.useway = useway;
		this.productTypeId = productTypeId;
		this.buyLists = buyLists;
	}
}