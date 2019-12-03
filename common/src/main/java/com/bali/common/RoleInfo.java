package com.bali.common;

/**
 * RoleInfo entity. @author MyEclipse Persistence Tools
 */

public class RoleInfo implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = -7073254380971376912L;
	private Long roleId;
	private String roleName;

	public RoleInfo(Long roleId, String roleName) {
		this.roleId = roleId;
		this.roleName = roleName;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Long getRoleId() {
		return roleId;
	}

	public RoleInfo setRoleId(Long roleId) {
		this.roleId = roleId;
		return this;
	}

	public String getRoleName() {
		return roleName;
	}

	public RoleInfo setRoleName(String roleName) {
		this.roleName = roleName;
		return this;
	}

	public RoleInfo() {
	}
}