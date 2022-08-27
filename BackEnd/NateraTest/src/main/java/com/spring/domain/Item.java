package com.spring.domain;

import com.fasterxml.jackson.annotation.JsonAlias;

public class Item {
	//@JsonProperty("media:description")
	@JsonAlias({"media:description"})
	private String mediaDescription;
	private String title;
	private String link;
	private String description;
	@JsonAlias({"dc:creator"})
	private String author;
	private String pubDate;
	@JsonAlias({"media:content"})
	private mediaImg image;
	
	
	public Item() {}	

	public Item(String title, String link, String description, String author, String pubDate, mediaImg image
			,String mediaDescription) {
		super();
		this.title = title;
		this.link = link;
		this.description = description;
		this.author = author;
		this.pubDate = pubDate;
		this.image = image;
		this.mediaDescription = mediaDescription;
	}
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getPubDate() {
		return pubDate;
	}

	public void setPubDate(String pubDate) {
		this.pubDate = pubDate;
	}
	//@JsonGetter("media:content")
	public mediaImg getImage() {
		return image;
	}

	public void setImage(mediaImg image) {
		this.image = image;
	}

	public String getMediaDescription() {
		return mediaDescription;
	}

	public void setMediaDescription(String mediaDescription) {
		this.mediaDescription = mediaDescription;
	}

	
}

class mediaImg{
	private String url;
	public mediaImg() {}
	public mediaImg(String url) {
		super();
		this.url = url;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
}
