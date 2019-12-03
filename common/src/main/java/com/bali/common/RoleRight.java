package com.bali.common;

/**
 * RoleRight entity. @author MyEclipse Persistence Tools
 */

public class RoleRight implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 7194812001772322311L;
	private Long rfId; //角色权限表自动编号
	private Long rfRoleId; //角色id
	private String rfRightCode; //权限编号
	private SysRight sysRight; //角色对应权限

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Long getRfId() {
		return rfId;
	}

	public RoleRight setRfId(Long rfId) {
		this.rfId = rfId;
		return this;
	}

	public Long getRfRoleId() {
		return rfRoleId;
	}

	public RoleRight setRfRoleId(Long rfRoleId) {
		this.rfRoleId = rfRoleId;
		return this;
	}

	public String getRfRightCode() {
		return rfRightCode;
	}

	public RoleRight setRfRightCode(String rfRightCode) {
		this.rfRightCode = rfRightCode;
		return this;
	}

	public SysRight getSysRight() {
		return sysRight;
	}

	public RoleRight setSysRight(SysRight sysRight) {
		this.sysRight = sysRight;
		return this;
	}

	public RoleRight(Long rfId, Long rfRoleId, String rfRightCode, SysRight sysRight) {
		this.rfId = rfId;
		this.rfRoleId = rfRoleId;
		this.rfRightCode = rfRightCode;
		this.sysRight = sysRight;
	}

	public RoleRight() {
	}
}