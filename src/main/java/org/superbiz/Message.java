package org.superbiz;

import java.util.Date;

public class Message {
    private int messageId;
    private String sender;
    private String message;
    private Date date;
    private String senderPhoto;


    public Message() {
    }
    public Message(String sender, String message) {
        this.sender = sender;
        this.message = message;
    }

    //getters and setters
    public int getMessageId() {
        return messageId;
    }
    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }
    public String getSender() {
        return sender;
    }
    public void setSender(String sender) {
        this.sender = sender;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
}
