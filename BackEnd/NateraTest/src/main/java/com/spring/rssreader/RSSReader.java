package com.spring.rssreader;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;

import org.json.*;  
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.domain.RequestURL;

@Component
public class RSSReader {
	private static final RequestURL rssURL = RequestURL.valueOf("RSSURL");
	
	public JsonNode getDataFromRSSURL() throws IOException{
		URL url = new URL(rssURL.getURL());
		BufferedReader rd = new BufferedReader(new InputStreamReader(url.openStream()));
		String xmlString = rd.lines().collect(Collectors.joining());
		JSONObject xmlJSONObj = XML.toJSONObject(xmlString);
		ObjectMapper mapper = new ObjectMapper();
		return mapper.readTree(xmlJSONObj.toString());
	}
}