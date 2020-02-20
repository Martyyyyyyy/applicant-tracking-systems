package org.superbiz;

import java.util.ArrayList;
import java.util.Date;

public class Message {
    private int messageId;
    private String sender;
    //private String message;
    private ArrayList<String> message;
    private Date date;
    //private String senderPhoto;


    public Message() {
    }
    public Message(String sender, ArrayList<String> message) {
        this.sender = sender;
        this.message = message;
        this.date = new Date();
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
    public ArrayList<String> getMessage() {
        return message;
    }
    public void setMessage(ArrayList<String> message) {
        this.message = message;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
}
