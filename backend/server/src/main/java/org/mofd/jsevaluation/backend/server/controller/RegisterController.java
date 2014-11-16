package org.mofd.jsevaluation.backend.server.controller;

import org.mofd.jsevaluation.backend.server.model.User;
import org.mofd.jsevaluation.backend.server.repository.UserRepository;
import org.mofd.jsevaluation.backend.server.util.PasswortUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller zur Ausgabe zufaelliger Nachrichten.
 *
 * @author konstantinsteuer
 * @since 09.11.14
 */
@RestController
public class RegisterController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswortUtil passwortUtil;

    @RequestMapping(value = "register", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public User register(@RequestBody User user) {
        user.setPasswort(passwortUtil.encodePasswort(user.getPasswort()));
        return userRepository.save(user);
    }

}
