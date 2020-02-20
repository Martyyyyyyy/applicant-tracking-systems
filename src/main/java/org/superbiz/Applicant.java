package org.superbiz;

import java.util.ArrayList;

public class Applicant {
    private int applicantId;
    private String applicantFirstName;
    private String applicantLastName;
    private String placeOfEmployment;
    private String addres;
    private String applicantPhotoURL;
    private ArrayList<Experience> experience;
    private ArrayList<Education> education;
    private ArrayList<Message> chat;

    public Applicant() {

    }
    public Applicant(String applicantFirstName, String applicantLastName) {
        this.applicantFirstName = applicantFirstName;
        this.applicantLastName = applicantLastName;
    }
    public Applicant(String applicantFirstName, String applicantLastName, String placeOfEmployment, String addres) {
        this.applicantFirstName = applicantFirstName;
        this.applicantLastName = applicantLastName;
        this.placeOfEmployment = placeOfEmployment;
        this.addres = addres;
    }
    public Applicant(int applicantId,String applicantFirstName, String applicantLastName, String placeOfEmployment, String addres) {
        this.applicantId = applicantId;
        this.applicantFirstName = applicantFirstName;
        this.applicantLastName = applicantLastName;
        this.placeOfEmployment = placeOfEmployment;
        this.addres = addres;
    }

    //getters and setters
    public int getApplicantId() {
        return applicantId;
    }
    public void setApplicantId(int applicantId) {
        this.applicantId = applicantId;
    }
    public String getFullName() {
        return this.applicantFirstName + " " +this.applicantLastName;
    }
    public String getApplicantFirstName() {
        return applicantFirstName;
    }
    public void setApplicantFirstName(String applicantFirstName) {
        this.applicantFirstName = applicantFirstName;
    }
    public String getApplicantLastName() {
        return applicantLastName;
    }
    public void setApplicantLastName(String applicantLastName) {
        this.applicantLastName = applicantLastName;
    }
    public String getPlaceOfEmployment() {
        return placeOfEmployment;
    }
    public void setPlaceOfEmployment(String placeOfEmployment) {
        this.placeOfEmployment = placeOfEmployment;
    }
    public String getAddres() {
        return addres;
    }
    public void setAddres(String addres) {
        this.addres = addres;
    }
    public ArrayList<Education> getEducation() {
        return education;
    }
    public void setEducation(ArrayList<Education> education) {
        this.education = education;
    }
    public ArrayList<Experience> getExperience() {
        return experience;
    }
    public void setExperience(ArrayList<Experience> experience) {
        this.experience = experience;
    }
    public String getApplicantPhotoURL() {
        return applicantPhotoURL;
    }
    public void setApplicantPhotoURL(String applicantPhotoURL) {
        this.applicantPhotoURL = applicantPhotoURL;
    }
    public ArrayList<Message> getChat() {
        return chat;
    }
    public void setChat(ArrayList<Message> messages) {
        this.chat = messages;
    }
}
