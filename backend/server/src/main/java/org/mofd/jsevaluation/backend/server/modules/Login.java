package org.mofd.jsevaluation.backend.server.modules;

/**
 * Login.
 *
 * @author steuer.konstantin <br>
 * copyright (C) 2014, SWM Services GmbH
 */
public class Login {
	private String benutzer;

	private String passwort;

	public Login() {
	}

	public Login(String benutzer, String passwort) {
		this.benutzer = benutzer;
		this.passwort = passwort;
	}

	public String getBenutzer() {
		return benutzer;
	}

	public void setBenutzer(String benutzer) {
		this.benutzer = benutzer;
	}

	public String getPasswort() {
		return passwort;
	}

	public void setPasswort(String passwort) {
		this.passwort = passwort;
	}
}
