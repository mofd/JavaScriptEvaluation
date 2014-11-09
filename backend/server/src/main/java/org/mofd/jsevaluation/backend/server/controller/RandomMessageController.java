package org.mofd.jsevaluation.backend.server.controller;

import org.mofd.jsevaluation.backend.server.model.Message;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller zur Ausgabe zufaelliger Nachrichten.
 *
 * @author konstantinsteuer
 * @since 09.11.14
 */
@RestController
public class RandomMessageController {

    @RequestMapping(value = "message", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Message message(@RequestParam(value = "messagePart", defaultValue = "") String messagePart) {
        return new Message(messagePart);
    }
}
