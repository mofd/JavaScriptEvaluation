package org.mofd.jsevaluation.backend.server.container.datasource;

import org.hsqldb.jdbc.JDBCDriver;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.sql.DataSource;

/**
 * HsqlDbDataSource.
 *
 * @author konstantinsteuer
 * @since 16.11.14
 */
@Component
public class HsqlDbDataSource {

    public static final String JDBC_HSQLDB_FILE = "jdbc:hsqldb:file:";
    public static final String JDBC_HSQLDB_MEM = "jdbc:hsqldb:mem";

    @Bean
    public DataSource dataSource() {
        String dbFile = System.getProperty("dbFile");
        String driverUrl;
        if (StringUtils.isEmpty(dbFile)) {
            driverUrl = JDBC_HSQLDB_FILE + "./defaultDB";
        } else if ("mem".equals(dbFile)) {
            driverUrl = JDBC_HSQLDB_MEM;
        } else {
            driverUrl = JDBC_HSQLDB_FILE + dbFile;
        }
        return new SimpleDriverDataSource(new JDBCDriver(), driverUrl, "sa", "sa");
    }

}
