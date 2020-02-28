package org.superbiz;

public class Message {
    private int messageId;
    private String sender;
    private String message;
    private String date;

    public Message() {
    }

    public Message(int messageId ,String sender, String message, String date) {
        this.messageId = messageId;
        this.sender = sender;
        this.message = message;
        this. date = date;
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
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
}
