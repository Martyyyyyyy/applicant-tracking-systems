package org.superbiz;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/applicants")
public class ApplicantService {

    private final String url = "jdbc:postgresql://localhost/postgres";
    private final String user = "martina";
    private final String password = "martina";

    /*Return array of all Applicants in base with basic information
    * (id, name, place of employment, address, photo)*/
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response getAllApplicants() throws SQLException {
        ArrayList<Applicant> applicants = new ArrayList<Applicant>();
        Connection conn = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server successfuly.");
            Statement statement = conn.createStatement();
            String sql = "SELECT applicantId, firstName, lastName, placeOfEmpl, address, photoUrl FROM applicant";
            ResultSet rs = statement.executeQuery(sql);
            while (rs.next()){
                applicants.add( new Applicant( rs.getInt("applicantId"),
                        rs.getString("firstName"), rs.getString("lastName"),
                        rs.getString("placeOfEmpl"), rs.getString("address"),
                        rs.getString("photoUrl") ));
            }
            rs.close();
            System.out.println("Close connection.");
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        //return applicants;
        return Response
                .status(Response.Status.OK)
                .entity(applicants)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }

    @Path("search/{value}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response searchApplicants(@PathParam("value") String inputValue) throws SQLException {
        ArrayList<Applicant> applicants = new ArrayList<Applicant>();
        Connection conn = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            //System.out.println("Connected to the PostgreSQL server successfuly.");
            Statement statement = conn.createStatement();
            String sql = "SELECT applicantId, firstName, lastName, placeOfEmpl, address, photoUrl FROM applicant " +
                    "WHERE firstName ILIKE '"+inputValue+"%' OR lastName ILIKE '"+inputValue+"%' " +
                    "OR address ILIKE '%"+inputValue+"%' OR placeOfEmpl ILIKE '%"+inputValue+"%'";
            ResultSet rs = statement.executeQuery(sql);
            while (rs.next()){
                applicants.add( new Applicant( rs.getInt("applicantId"),
                        rs.getString("firstName"), rs.getString("lastName"),
                        rs.getString("placeOfEmpl"), rs.getString("address"),
                        rs.getString("photoUrl") ));
            }
            rs.close();
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        return Response
                .status(Response.Status.OK)
                .entity(applicants)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }


    /*Return more information about selected applicant.*/
    @Path("moreInfo/{applId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response getMoreApplicantInfoById(@PathParam("applId") int applicantId ) throws SQLException {
        ArrayList<Experience> exp = new ArrayList<Experience>();
        ArrayList<Education> edu = new ArrayList<Education>();
        ArrayList<Message> chat = new ArrayList<Message>();
        String firstName = "";
        String lastName = "";
        String photoUrl = "";
        Connection conn = null;
        try {
            Class.forName("org.postgresql.Driver");
            String sql1 = "SELECT expId, companyName, photoUrl, position, time, place FROM experience WHERE applicantId="+ applicantId;
            String sql2 = "SELECT eduId, instName, photoUrl, diploma, modul, time FROM education WHERE applicantId =" + applicantId;
            String sql3 = "SELECT msgId, sender, msg, date FROM message WHERE applicantId ="+ applicantId;
            String sql4 = "SELECT  firstName, lastName, photoUrl FROM applicant WHERE  applicantId =" + applicantId;
            ArrayList<String> sqls = new ArrayList<String>();
            sqls.add(sql1);
            sqls.add(sql2);
            sqls.add(sql3);
            sqls.add(sql4);
            for( String sql : sqls){
                conn = DriverManager.getConnection(url, user, password);
                System.out.println("Connected to the PostgreSQL server successfuly.");
                Statement statement = conn.createStatement();
                ResultSet rs = statement.executeQuery(sql);
                while (rs.next()){
                    if(sql == sql1){
                        exp.add( new Experience(rs.getInt("expId"), rs.getString("companyName"),
                                rs.getString("photoUrl"), rs.getString("position"),
                                rs.getString("time"), rs.getString("place") ));
                    }else if(sql == sql2){
                        edu.add( new Education(rs.getInt("eduId"), rs.getString("instName"),
                                rs.getString("photoUrl"), rs.getString("diploma"),
                                rs.getString("modul"), rs.getString("time") ));
                    }else if(sql == sql3) {
                        chat.add( new Message(rs.getInt("msgId"), rs.getString("sender"),
                                rs.getString("msg"), rs.getString("date")));
                    }else {
                        firstName = rs.getString("firstName");
                        lastName = rs.getString("lastName");
                        photoUrl = rs.getString("photoUrl");
                    }

                }
                rs.close();
                System.out.println("Close connection.");
            }
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        Applicant applicantMoreInfo = new Applicant(applicantId, firstName, lastName, photoUrl, exp, edu, chat);
        return Response
                .status(Response.Status.OK)
                .entity(applicantMoreInfo)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }

}
