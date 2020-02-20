package org.superbiz;

public class Education {
    private int educationId;
    private String institutionName;
    private String institutionPhotoURL;
    private String diploma;
    private String modul;
    private String attendanceTime;

    public Education() {
    }
    public Education(String institutionName, String institutionPhotoURL, String diploma, String modul,
                     String attendanceTime) {
        this.institutionName = institutionName;
        this.institutionPhotoURL = institutionPhotoURL;
        this.diploma = diploma;
        this.modul = modul;
        this.attendanceTime = attendanceTime;
    }

    //geters and seters
    public int getEducationId() {
        return educationId;
    }
    public void setEducationId(int educationId) {
        this.educationId = educationId;
    }
    public String getInstitutionName() {
        return institutionName;
    }
    public void setInstitutionName(String institutionName) {
        this.institutionName = institutionName;
    }
    public String getInstitutionPhotoURL() {
        return institutionPhotoURL;
    }
    public void setInstitutionPhotoURL(String institutionPhotoURL) {
        this.institutionPhotoURL = institutionPhotoURL;
    }
    public String getDiploma() {
        return diploma;
    }
    public void setDiploma(String diploma) {
        this.diploma = diploma;
    }
    public String getAttendanceTime() {
        return attendanceTime;
    }
    public void setAttendanceTime(String attendanceTime) {
        this.attendanceTime = attendanceTime;
    }
    public String getModul() {
        return modul;
    }
    public void setModul(String modul) {
        this.modul = modul;
    }
}
