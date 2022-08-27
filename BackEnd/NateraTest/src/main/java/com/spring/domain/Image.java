package com.spring.domain;

public class Image {
	private String title;
	private String url;
	private String link;
	
	public Image() {}

	public Image(String title, String url, String link) {
		super();
		this.title = title;
		this.url = url;
		this.link = link;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	};
	
	
}
