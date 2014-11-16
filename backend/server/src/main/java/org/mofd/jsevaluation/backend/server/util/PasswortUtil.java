package org.mofd.jsevaluation.backend.server.util;

import org.springframework.stereotype.Component;

import java.security.MessageDigest;

/**
 * PasswortUtil.
 *
 * @author konstantinsteuer
 * @since 16.11.14
 */
@Component
public class PasswortUtil {

    public String encodePasswort(String passwort) {
        try {
            byte[] passwortBytes = passwort.getBytes("UTF-8");
            MessageDigest md = MessageDigest.getInstance("MD5");

            return new String(md.digest(passwortBytes));
        } catch (Exception e) {
            return passwort;
        }
    }
}
