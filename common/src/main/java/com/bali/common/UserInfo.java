package com.bali.common;

/**
 * UserInfo entity
 */

public class UserInfo implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 5301211953692730339L;

	private Long userId;//用户id
	private Long userRoleId;//用户对应角色
	private String userName;//用户名
	private String userPwd;//用户密码
	private String TokenId;//生成的tokeid；
	private Boolean yzmboolen;



	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Long getUserId() {
		return userId;
	}

	public UserInfo setUserId(Long userId) {
		this.userId = userId;
		return this;
	}

	public Long getUserRoleId() {
		return userRoleId;
	}

	public UserInfo setUserRoleId(Long userRoleId) {
		this.userRoleId = userRoleId;
		return this;
	}

	public String getUserName() {
		return userName;
	}

	public UserInfo setUserName(String userName) {
		this.userName = userName;
		return this;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public UserInfo setUserPwd(String userPwd) {
		this.userPwd = userPwd;
		return this;
	}

	public UserInfo(Long userId, Long userRoleId, String userName, String userPwd) {
		this.userId = userId;
		this.userRoleId = userRoleId;
		this.userName = userName;
		this.userPwd = userPwd;
	}

	public UserInfo() {
	}

	public String getTokenId() {
		return TokenId;
	}

	public void setTokenId(String tokenId) {
		TokenId = tokenId;
	}

	public Boolean getYzmboolen() {
		return yzmboolen;
	}

	public void setYzmboolen(Boolean yzmboolen) {
		this.yzmboolen = yzmboolen;
	}
}