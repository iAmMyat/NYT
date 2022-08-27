package com.spring.domain;

public enum RequestURL {
	RSSURL("https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml");
	
	private String url;
	
	RequestURL(String url){
		this.url = url;
	}
	public String getURL() {
		return url;
	}
}
