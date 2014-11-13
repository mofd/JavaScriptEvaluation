package org.mofd.jsevaluation.backend.server.model;

import java.util.Date;

/**
 * Configuration.
 *
 * @author steuer.konstantin <br>
 * copyright (C) 2014, SWM Services GmbH
 */
public class Configuration {
	private final Date currentTime;
	private final String appName;
	private final String remoteAddr;
	private final String serverName;

	public Configuration(Date currentTime, String appName, String remoteAddr, String serverName) {

		this.currentTime = currentTime;
		this.appName = appName;
		this.remoteAddr = remoteAddr;
		this.serverName = serverName;
	}

	public Date getCurrentTime() {
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
}
