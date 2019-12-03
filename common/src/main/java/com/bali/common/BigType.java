package com.bali.common;

import java.util.HashSet;
import java.util.Set;

/**
 * BigType entity
 */

public class BigType implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -1060941211709814529L;
	private Long typeId;
	private String productTypeName;
	private Set<ChildType> childTypes = new HashSet<ChildType>();//��Ӧ����

	// Constructors

	/** default constructor */
	public BigType() {
	}

	/** minimal constructor */
	public BigType(Long typeId, String productTypeName) {
		this.typeId = typeId;
		this.productTypeName = productTypeName;
	}

	/** full constructor */
	public BigType(Long typeId, String productTypeName, Set<ChildType> childTypes) {
		this.typeId = typeId;
		this.productTypeName = productTypeName;
		this.childTypes = childTypes;
	}

	// Property accessors

	public Long getTypeId() {
		return this.typeId;
	}

	public void setTypeId(Long typeId) {
		this.typeId = typeId;
	}

	public String getProductTypeName() {
		return this.productTypeName;
	}

	public void setProductTypeName(String productTypeName) {
		this.productTypeName = productTypeName;
	}

	public Set<ChildType> getChildTypes() {
		return this.childTypes;
	}

	public void setChildTypes(Set<ChildType> childTypes) {
		this.childTypes = childTypes;
	}

}