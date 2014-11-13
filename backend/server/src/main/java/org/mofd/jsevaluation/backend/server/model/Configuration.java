package org.mofd.jsevaluation.backend.server.model;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * Configuration.
 *
 * @author steuer.konstantin <br>
 * copyright (C) 2014, SWM Services GmbH
 */
public class Configuration {
	private final String currentTime;
	private final String appName;
	private final String remoteAddr;
	private final String serverName;
	private final String serverUrl;

	public Configuration(Date currentTime, String appName, HttpServletRequest request) {
		this.currentTime = currentTime.toString();
		this.appName = appName;
		this.remoteAddr = request.getRemoteAddr();
		this.serverName = request.getServerName();
		this.serverUrl = String
			.format("%s://%s:%d/", request.getScheme(), request.getServerName(), request.getServerPort());
	}

	public String getCurrentTime() {
		return currentTime;
	}

	public String getAppName() {
		return appName;
	}

	public String getRemoteAddr() {
		return remoteAddr;
	}

	public String getServerName() {
		return serverName;
	}

	public String getServerUrl() {
		return serverUrl;
	}
}
