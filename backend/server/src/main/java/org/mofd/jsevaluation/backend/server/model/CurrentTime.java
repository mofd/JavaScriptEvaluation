package org.mofd.jsevaluation.backend.server.model;

/**
 * CurrentTime.
 *
 * @author steuer.konstantin <br>
 * copyright (C) 2014, SWM Services GmbH
 */
public class CurrentTime {
	private String currentTime;

	public CurrentTime(String currentTime) {
		this.currentTime = currentTime;
	}

	public String getCurrentTime() {
		return currentTime;
	}

	public void setCurrentTime(String currentTime) {
		this.currentTime = currentTime;
	}
}
