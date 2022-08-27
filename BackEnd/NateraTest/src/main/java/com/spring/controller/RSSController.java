package com.spring.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.domain.NYTRss;
import com.spring.rssreader.RSSReader;

@CrossOrigin(origins= "http://localhost:3000/")
@RestController
public class RSSController {
	@Autowired
	RSSReader rssReader;
	
	@GetMapping(value="/getAll")
	public ResponseEntity<JsonNode> getAll() throws IOException{
		JsonNode node = rssReader.getDataFromRSSURL();
		ResponseEntity<JsonNode> response = new ResponseEntity<>(node,HttpStatus.OK);
		return response;
	}
	
	@GetMapping(value="/getAllWithClass")
	public ResponseEntity<NYTRss> getAllWithClass() throws IOException{
		ObjectMapper mapper = new ObjectMapper();
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		JsonNode node = rssReader.getDataFromRSSURL();
		System.out.println(node);
		NYTRss nyt = mapper.readValue(node.get("rss").get("channel").toPrettyString(), NYTRss.class);		
		nyt.setItem(nyt.getItem().stream().filter(key -> key.getImage() != null).toList());
		ResponseEntity<NYTRss> response = new ResponseEntity<>(nyt,HttpStatus.OK);
		return response;
	}
	
}
