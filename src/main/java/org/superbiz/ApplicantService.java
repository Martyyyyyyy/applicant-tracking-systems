package org.superbiz;

import jdk.nashorn.internal.objects.annotations.Getter;

import java.util.ArrayList;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/applicants")
public class ApplicantService {

    private ArrayList<Applicant> applicants = new ArrayList<Applicant>();

    public ApplicantService(){
        Applicant appl1 = new Applicant(1,"Almir","Omerovic","Software Developer at DCCS, Tuzla","Moluhe,7500 Tuzla");
        Applicant appl2 = new Applicant(2,"Ina","Golos","Software Developer at CapeAnn Enterprises, Tuzla", "Stupine, 7500 Tuzla");
        appl1.setApplicantPhotoURL("https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-9/s960x960/36717461_2267391713287965_8766276259727540224_o.jpg?_nc_cat=104&_nc_ohc=7bOzcR-Zuf8AX-Myd80&_nc_ht=scontent.ftzl2-1.fna&oh=65a8ffe1b34fafabca4f6adf06708cad&oe=5EFE6CCE");
        appl2.setApplicantPhotoURL("https://scontent.ftzl2-1.fna.fbcdn.net/v/t1.0-9/28577288_775576645961592_616938734488758731_n.jpg?_nc_cat=106&_nc_ohc=fGY79cW0O9UAX-qT3g9&_nc_ht=scontent.ftzl2-1.fna&oh=6870be142173f0da87f57cead87e0a0d&oe=5EBF1C92");
        ArrayList<Applicant> applList = new ArrayList<Applicant>();
        applList.add(appl1);
        applList.add(appl2);
        this.applicants = applList;
    }

    @GET
    @Produces({APPLICATION_JSON})
    public ArrayList<Applicant> getApplicants(){
        return applicants;
    }

    @Path("names")
    @GET
    public String getApplicantsNames(){
        String applicantsName  = "";
        for(Applicant apl: applicants ){
            applicantsName += apl.getFullName()+", ";
        }
        return applicantsName;
    }

}
