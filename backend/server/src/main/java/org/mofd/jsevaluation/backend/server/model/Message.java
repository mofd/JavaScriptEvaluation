package org.mofd.jsevaluation.backend.server.model;


import org.springframework.util.StringUtils;

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
        String timestamp = String.valueOf(System.currentTimeMillis());
        String internalMessage = String.valueOf(Math.abs(timestamp.hashCode())).substring(0, 5);
        if (StringUtils.isEmpty(messagePart)) {
            messageBody = "Missing messagePart" + internalMessage;
        } else {
            messageBody = messagePart + " && " + internalMessage;
        }

        messageHeader.put("timstamp", timestamp);
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
