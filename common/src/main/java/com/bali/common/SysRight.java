package com.bali.common;

/**
 * SysRight entity. @author MyEclipse Persistence Tools
 */

public class SysRight implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 9084668242869391556L;
	private String rightCode;
	private String rightParentCode;
	private String rightText;
	private String rightUrl;

	public SysRight(String rightCode, String rightParentCode, String rightText, String rightUrl) {
		this.rightCode = rightCode;
		this.rightParentCode = rightParentCode;
		this.rightText = rightText;
		this.rightUrl = rightUrl;
	}

	public SysRight() {
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public String getRightCode() {
		return rightCode;
	}

	public SysRight setRightCode(String rightCode) {
		this.rightCode = rightCode;
		return this;
	}

	public String getRightParentCode() {
		return rightParentCode;
	}

	public SysRight setRightParentCode(String rightParentCode) {
		this.rightParentCode = rightParentCode;
		return this;
	}

	public String getRightText() {
		return rightText;
	}

	public SysRight setRightText(String rightText) {
		this.rightText = rightText;
		return this;
	}

	public String getRightUrl() {
		return rightUrl;
	}

	public SysRight setRightUrl(String rightUrl) {
		this.rightUrl = rightUrl;
		return this;
	}
}