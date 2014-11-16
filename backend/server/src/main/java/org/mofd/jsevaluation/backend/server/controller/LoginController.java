package org.mofd.jsevaluation.backend.server.controller;

import org.mofd.jsevaluation.backend.server.model.*;
import org.mofd.jsevaluation.backend.server.modules.Login;
import org.mofd.jsevaluation.backend.server.repository.UserRepository;
import org.mofd.jsevaluation.backend.server.util.PasswortUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

/**
 * Controller zur Ausgabe zufaelliger Nachrichten.
 *
 * @author konstantinsteuer
 * @since 09.11.14
 */
@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswortUtil passwortUtil;

    @RequestMapping(value = "login", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Session login(@RequestBody Login login, HttpServletResponse response) throws IOException {
        if (StringUtils.isEmpty(login.getBenutzer()) || StringUtils.isEmpty(login.getPasswort())) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Benutzername oder Paswort nicht vorhanden");
            return null;
        } else {

            User benutzer = userRepository.findByBenutzernameAndPasswort(login.getBenutzer(),
                    passwortUtil.encodePasswort(login.getPasswort()));

            if( benutzer == null ){
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Kein Benutzer gefunden");
                return null;
            } else {
                return new Session(String.valueOf(System.nanoTime()), true, benutzer.getId());
            }
        }
    }
}
