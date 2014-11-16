package org.mofd.jsevaluation.backend.server;

import org.junit.Before;
import org.junit.Test;
import org.mofd.jsevaluation.backend.server.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

import static org.junit.Assert.*;

public class ApplicationTest {

    @Before
    public void setUp() throws Exception {
        System.setProperty("dbFile", "mem");
        Application.main(new String[]{});
    }

    @Test
    public void testMain() throws Exception {
        ConfigurableApplicationContext toTest = Application.applicationContext;
        assertNotNull(toTest);
        assertNotNull(toTest.getBean(UserRepository.class));
    }
}