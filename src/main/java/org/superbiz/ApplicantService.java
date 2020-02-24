package org.superbiz;

import java.sql.*;
import java.util.ArrayList;
import java.util.Properties;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/applicants")
public class ApplicantService {

    private final String url = "jdbc:postgresql://localhost/postgres";
    private final String user = "martina";
    private final String password = "martina";

    @GET
    @Produces({APPLICATION_JSON})
    public ArrayList<Applicant> getAllApplicants() throws SQLException {
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
        return applicants;
    }
}
