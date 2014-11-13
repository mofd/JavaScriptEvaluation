package org.mofd.jsevaluation.backend.server.model;

/**
 * Session.
 *
 * @author steuer.konstantin <br>
 * copyright (C) 2014, SWM Services GmbH
 */
public class Session {
	private String id;
	private boolean active;

	public Session() {
	}

	public Session(String id, boolean active) {
		this.id = id;
		this.active = active;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
}
