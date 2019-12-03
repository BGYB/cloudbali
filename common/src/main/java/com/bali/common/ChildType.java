package com.bali.common;

/**
 * ChildType entity. @author MyEclipse Persistence Tools
 */

public class ChildType implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -6813277454161187904L;
	private Long childTypeId;
	private String childName;
	private Long bigid; //BigType表中的bigid外键商品大类表
	private BigType bigType;

	public ChildType() {
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Long getChildTypeId() {
		return childTypeId;
	}

	public ChildType setChildTypeId(Long childTypeId) {
		this.childTypeId = childTypeId;
		return this;
	}

	public String getChildName() {
		return childName;
	}

	public ChildType setChildName(String childName) {
		this.childName = childName;
		return this;
	}

	public Long getBigid() {
		return bigid;
	}

	public ChildType setBigid(Long bigid) {
		this.bigid = bigid;
		return this;
	}

	public BigType getBigType() {
		return bigType;
	}

	public ChildType setBigType(BigType bigType) {
		this.bigType = bigType;
		return this;
	}

	public ChildType(Long childTypeId, String childName, Long bigid, BigType bigType) {
		this.childTypeId = childTypeId;
		this.childName = childName;
		this.bigid = bigid;
		this.bigType = bigType;
	}
}