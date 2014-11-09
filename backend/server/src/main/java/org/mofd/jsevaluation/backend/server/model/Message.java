package org.mofd.jsevaluation.backend.server.model;


import org.springframework.util.StringUtils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Message-Model.
 *
 * @author konstantinsteuer
 * @since 09.11.14
 */
public class Message {

    private Map<String, String> messageHeader = new HashMap<String, String>();

    private String messageBody;

    public Message(String messagePart) {
        if (StringUtils.isEmpty(messagePart)) {
            messageBody = "Missing messagePart";
        } else {
            messageBody = "Message received on server: " + messagePart;
        }

        messageHeader.put("timestamp", new Date().toString());
    }

    public Map<String, String> getMessageHeader() {
        return messageHeader;
    }

    public void setMessageHeader(Map<String, String> messageHeader) {
        this.messageHeader = messageHeader;
    }

    public String getMessageBody() {
        return messageBody;
    }

    public void setMessageBody(String messageBody) {
        this.messageBody = messageBody;
    }
}
