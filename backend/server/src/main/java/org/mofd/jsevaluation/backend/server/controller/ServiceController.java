package org.mofd.jsevaluation.backend.server.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.mofd.jsevaluation.backend.server.model.Configuration;
import org.mofd.jsevaluation.backend.server.model.CurrentTime;
import org.mofd.jsevaluation.backend.server.model.Message;
import org.mofd.jsevaluation.backend.server.model.Session;
import org.mofd.jsevaluation.backend.server.modules.Login;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

/**
 * Controller zur Ausgabe zufaelliger Nachrichten.
 *
 * @author konstantinsteuer
 * @since 09.11.14
 */
@RestController
public class ServiceController {

    @RequestMapping(value = "message", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Message message(@RequestParam(value = "messagePart", defaultValue = "") String messagePart) {
        return new Message(messagePart);
    }

    @RequestMapping(value = "currentTime", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public CurrentTime curretTime() {
        return new CurrentTime(new Date().toString());
    }

    @RequestMapping(value = "config", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Configuration config(HttpServletRequest request) {
        return new Configuration(new Date(), "JavaScriptEvaluation", request);
    }
}
