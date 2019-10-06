package vn.com.kodergang.common.utils;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class DatabaseUtil {

    @Autowired
    private static JdbcTemplate jdbcTemplate;

    public static Connection getConnection() throws SQLException {
        return jdbcTemplate.getDataSource().getConnection();
    }

    public static void closeObject(Statement obj) {
        try {
            obj.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static void closeObject(ResultSet obj) {
        try {
            obj.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static void closeObject(Connection obj) {
        try {
            obj.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
