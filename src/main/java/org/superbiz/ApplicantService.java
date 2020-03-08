package org.superbiz;

import java.sql.*;
import java.util.ArrayList;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/applicants")
public class ApplicantService {

    //Change with your database connection data (url, user, password).
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
        Statement statement = null;
        ResultSet rs = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server to return all Applicants.");
            statement = conn.createStatement();
            String sql = "SELECT applicantId, firstName, lastName, placeOfEmpl, address, photoUrl FROM applicant";
            rs = statement.executeQuery(sql);
            while (rs.next()){
                applicants.add( new Applicant( rs.getInt("applicantId"),
                        rs.getString("firstName"), rs.getString("lastName"),
                        rs.getString("placeOfEmpl"), rs.getString("address"),
                        rs.getString("photoUrl") ));
            }
            System.out.println("Return  all Applicants");
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        finally {
            try {
                if(rs != null)
                    rs.close();
            } catch (SQLException e){
                e.printStackTrace();
            }
            try {
                if(statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                if(conn != null){
                    conn.close();
                    System.out.println("Close connection.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return Response
                .status(Response.Status.OK)
                .entity(applicants)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }

    /*Search trough  applicants and return applicants that satisfy the search criteria.*/
    @Path("search/{value}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response searchApplicants(@PathParam("value") String inputValue) throws SQLException {
        ArrayList<Applicant> applicants = new ArrayList<Applicant>();
        Connection conn = null;
        Statement statement = null;
        ResultSet rs = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server to search Applicants.");
            statement = conn.createStatement();
            String sql = "SELECT applicantId, firstName, lastName, placeOfEmpl, address, photoUrl FROM applicant " +
                    "WHERE firstName ILIKE '"+inputValue+"%' OR lastName ILIKE '"+inputValue+"%' " +
                    "OR address ILIKE '%"+inputValue+"%' OR placeOfEmpl ILIKE '%"+inputValue+"%'";
            rs = statement.executeQuery(sql);
            while (rs.next()){
                applicants.add( new Applicant( rs.getInt("applicantId"),
                        rs.getString("firstName"), rs.getString("lastName"),
                        rs.getString("placeOfEmpl"), rs.getString("address"),
                        rs.getString("photoUrl") ));
            }
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        finally {
            try {
                if(rs != null)
                    rs.close();
            } catch (SQLException e){
                e.printStackTrace();
            }
            try {
                if(statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                if(conn != null){
                    conn.close();
                    System.out.println("Close connection.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
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
        Connection conn = null;
        Statement statement = null;
        ResultSet rs = null;
        ArrayList<Experience> exp = new ArrayList<Experience>();
        ArrayList<Education> edu = new ArrayList<Education>();
        ArrayList<Message> chat = new ArrayList<Message>();
        String firstName = "";
        String lastName = "";
        String photoUrl = "";
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server to return more info about Applicant.");
            statement = conn.createStatement();
            String sql1 = "SELECT expId, companyName, photoUrl, position, time, place FROM experience WHERE applicantId="+ applicantId;
            String sql2 = "SELECT eduId, instName, photoUrl, diploma, modul, time FROM education WHERE applicantId =" + applicantId;
            String sql3 = "SELECT msgId, sender, msg, date FROM message WHERE applicantId ="+ applicantId;
            String sql4 = "SELECT  firstName, lastName, photoUrl FROM applicant WHERE  applicantId =" + applicantId;

            rs = statement.executeQuery(sql1);
            while (rs.next()){
                exp.add( new Experience(rs.getInt("expId"), rs.getString("companyName"),
                        rs.getString("photoUrl"), rs.getString("position"),
                        rs.getString("time"), rs.getString("place") ));
            }
            rs = statement.executeQuery(sql2);
            while (rs.next()){
                edu.add( new Education(rs.getInt("eduId"), rs.getString("instName"),
                        rs.getString("photoUrl"), rs.getString("diploma"),
                        rs.getString("modul"), rs.getString("time") ));
            }
            rs = statement.executeQuery(sql3);
            while (rs.next()){
                chat.add( new Message(rs.getInt("msgId"), rs.getString("sender"),
                        rs.getString("msg"), rs.getString("date")));
            }
            rs = statement.executeQuery(sql4);
            while (rs.next()){
                firstName = rs.getString("firstName");
                lastName = rs.getString("lastName");
                photoUrl = rs.getString("photoUrl");
            }
            conn.setAutoCommit(false);
            System.out.println("Return more information for Applicant with id = "+applicantId);

        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        finally {
            try {
                if(rs != null)
                    rs.close();
            } catch (SQLException e){
                e.printStackTrace();
            }
            try {
                if(statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                if(conn != null){
                    conn.close();
                    System.out.println("Close connection.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        Applicant applicantMoreInfo = new Applicant(applicantId, firstName, lastName, photoUrl, exp, edu, chat);
        return Response
                .status(Response.Status.OK)
                .entity(applicantMoreInfo)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }

    /*Return all edit information about selected applicant.*/
    @Path("edit/{applId}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response getEditApplicantInfoById(@PathParam("applId") int applicantId ) throws SQLException {
        Connection conn = null;
        Statement statement = null;
        ResultSet rs = null;
        ArrayList<Experience> exp = new ArrayList<Experience>();
        ArrayList<Education> edu = new ArrayList<Education>();
        String firstName = "";
        String lastName = "";
        String placeOfEmpl = "";
        String address = "";
        String photoUrl = "";
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server to return all info about Applicant.");
            statement = conn.createStatement();
            String sql1 = "SELECT expId, companyName, photoUrl, position, time, place FROM experience WHERE applicantId="+ applicantId;
            String sql2 = "SELECT eduId, instName, photoUrl, diploma, modul, time FROM education WHERE applicantId =" + applicantId;
            String sql3 = "SELECT  firstName, lastName, placeOfEmpl, address, photoUrl FROM applicant WHERE  applicantId =" + applicantId;

            rs = statement.executeQuery(sql1);
            while (rs.next()){
                exp.add( new Experience(rs.getInt("expId"), rs.getString("companyName"),
                        rs.getString("photoUrl"), rs.getString("position"),
                        rs.getString("time"), rs.getString("place") ));
            }
            rs = statement.executeQuery(sql2);
            while (rs.next()){
                edu.add( new Education(rs.getInt("eduId"), rs.getString("instName"),
                        rs.getString("photoUrl"), rs.getString("diploma"),
                        rs.getString("modul"), rs.getString("time") ));
            }
            rs = statement.executeQuery(sql3);
            while (rs.next()){
                firstName = rs.getString("firstName");
                lastName = rs.getString("lastName");
                placeOfEmpl = rs.getString("placeOfEmpl");
                address = rs.getString("address");
                photoUrl = rs.getString("photoUrl");
            }
            conn.setAutoCommit(false);
            System.out.println("Return all information for Applicant with id = "+applicantId);

        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        finally {
            try {
                if(rs != null)
                    rs.close();
            } catch (SQLException e){
                e.printStackTrace();
            }
            try {
                if(statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                if(conn != null){
                    conn.close();
                    System.out.println("Close connection.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        Applicant applicantInfo = new Applicant(applicantId, firstName, lastName, placeOfEmpl, address, photoUrl, exp, edu);
        return Response
                .status(Response.Status.OK)
                .entity(applicantInfo)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }

    /*Delete selected applicant from base.*/
    @Path("deleteApplicant/{applId}")
    @DELETE
    @Produces({MediaType.TEXT_PLAIN})
    public Response deleteApplicantById(@PathParam("applId") int applicantId ){
        Connection conn = null;
        Statement statement = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server to delete Applicant.");
            statement = conn.createStatement();
            String sql1 = "DELETE FROM message WHERE  applicantId = "+ applicantId;
            String sql2 = "DELETE FROM education WHERE  applicantId =" + applicantId;
            String sql3 = "DELETE FROM experience WHERE  applicantId ="+ applicantId;
            String sql4 = "DELETE FROM applicant WHERE  applicantId =" + applicantId;
            statement.executeUpdate(sql1);
            statement.executeUpdate(sql2);
            statement.executeUpdate(sql3);
            statement.executeUpdate(sql4);
            conn.setAutoCommit(false);
            System.out.println("Applicant with id = "+applicantId+" deleted");
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        finally {
            try {
                if(statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                if(conn != null){
                    conn.close();
                    System.out.println("Close connection.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return Response
                .status(Response.Status.OK)
                .entity("Applicant deleted")
                .build();
    }

    /*Update applicants personal information.*/
    @Path("update/{applId}")
    @POST
    @Consumes({MediaType.MULTIPART_FORM_DATA})
    @Produces({MediaType.TEXT_PLAIN})
    public Response updateApplicant(@PathParam("applId") int applicantId,
                                    @FormParam("firstName") String firstName,
                                    @FormParam("lastName") String lastName,
                                    @FormParam("applicantPhoto") String applicantPhoto,
                                    @FormParam("placeOfEmpl") String placeOfEmpl,
                                    @FormParam("address") String address ){
        Connection conn = null;
        Statement statement = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server to update Applicant.");
            statement = conn.createStatement();
            String sql = "UPDATE applicant " +
                    "SET firstName='"+firstName+"', lastName='"+lastName+"', placeOfEmpl='"+placeOfEmpl+
                    "', address ='"+address+"', photoUrl='"+applicantPhoto+
                    "' WHERE applicantId ="+applicantId;
            statement.executeUpdate(sql);
            //conn.setAutoCommit(false);
            System.out.println("Applicant with id = "+applicantId+" updated");
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        finally {
            try {
                if(statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                if(conn != null){
                    conn.close();
                    System.out.println("Close connection.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return Response
                .status(Response.Status.OK)
                .entity("Applicant updated")
                .build();
    }

    /*Insert new experience. */
    @Path("insertExperience/{applId}")
    @POST
    @Consumes({MediaType.MULTIPART_FORM_DATA})
    @Produces({MediaType.TEXT_PLAIN})
    public Response insertExperience(@PathParam("applId") int applicantId,
                                    @FormParam("companyName") String companyName,
                                    @FormParam("companyPhoto") String companyPhoto,
                                    @FormParam("position") String position,
                                    @FormParam("time") String time,
                                    @FormParam("place") String place ){
        Connection conn = null;
        Statement statement = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server to insert Experience.");
            statement = conn.createStatement();
            String sql = "INSERT INTO experience(companyName, position, time, place, applicantId, photoUrl) " +
                    "VALUES ('"+companyName+"', '"+position+"', '"+time+"', '"+place+"', "+applicantId+", '"+companyPhoto+"')";
            statement.executeUpdate(sql);
            System.out.println("Experience added.");
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        finally {
            try {
                if(statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                if(conn != null){
                    conn.close();
                    System.out.println("Close connection.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return Response
                .status(Response.Status.OK)
                .entity("Experience added.")
                .build();
    }

    /*Insert new education. */
    @Path("insertEducation/{applId}")
    @POST
    @Consumes({MediaType.MULTIPART_FORM_DATA})
    @Produces({MediaType.TEXT_PLAIN})
    public Response insertEducation(@PathParam("applId") int applicantId,
                                     @FormParam("institutionName") String institutionName,
                                     @FormParam("institutionPhoto") String institutionPhoto,
                                     @FormParam("diploma") String diploma,
                                     @FormParam("module") String module,
                                     @FormParam("attendance") String attendance ){
        Connection conn = null;
        Statement statement = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server to insert Education.");
            statement = conn.createStatement();
            String sql = "INSERT INTO education(instName, photoUrl, diploma, modul, time, applicantId) " +
                    "VALUES ('"+institutionName+"', '"+institutionPhoto+"', '"+diploma+"', '"+module+"', '"+attendance+"', "+applicantId+")";
            statement.executeUpdate(sql);
            System.out.println("Education added.");
        } catch (SQLException | ClassNotFoundException e){
            System.out.println(e.getMessage());
        }
        finally {
            try {
                if(statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                if(conn != null){
                    conn.close();
                    System.out.println("Close connection.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return Response
                .status(Response.Status.OK)
                .entity("Education added.")
                .build();
    }

}/*End of class ApplicantService*/
