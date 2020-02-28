package org.superbiz;

public class Experience {
    private int experienceId;
    private String companyName;
    private String companyPhotoURL;
    private String workingPosition;
    private String timeOfEmployment;
    private String placeOfEmployment;

    public Experience() {
    }

    public Experience(int experienceId ,String companyName, String companyPhotoURL, String workingPosition, String timeOfEmployment,
                      String placeOfEmployment) {
        this.experienceId = experienceId;
        this.companyName = companyName;
        this.companyPhotoURL = companyPhotoURL;
        this.workingPosition = workingPosition;
        this.timeOfEmployment = timeOfEmployment;
        this.placeOfEmployment = placeOfEmployment;
    }

    //getters and setters
    public int getExperienceId() {
        return experienceId;
    }
    public void setExperienceId(int experienceId) {
        this.experienceId = experienceId;
    }
    public String getCompanyName() {
        return companyName;
    }
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
    public String getCompanyPhotoURL() {
        return companyPhotoURL;
    }
    public void setCompanyPhotoURL(String companyPhotoURL) {
        this.companyPhotoURL = companyPhotoURL;
    }
    public String getWorkingPosition() {
        return workingPosition;
    }
    public void setWorkingPosition(String workingPosition) {
        this.workingPosition = workingPosition;
    }
    public String getTimeOfEmployment() {
        return timeOfEmployment;
    }
    public void setTimeOfEmployment(String timeOfEmployment) {
        this.timeOfEmployment = timeOfEmployment;
    }
    public String getPlaceOfEmployment() {
        return placeOfEmployment;
    }
    public void setPlaceOfEmployment(String placeOfEmployment) {
        this.placeOfEmployment = placeOfEmployment;
    }



}
