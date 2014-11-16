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
	private Long userId;

	public Session() {
	}

	public Session(String id, boolean active, Long userId) {
		this.id = id;
		this.active = active;
		this.userId = userId;
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

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}
