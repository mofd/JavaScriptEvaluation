package org.mofd.jsevaluation.backend.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Applikationsklasse für den Server
 *
 * @author konstantinsteuer
 * @since 09.11.14
 */
@Configuration
@ComponentScan
@EnableAutoConfiguration
public class Application {

    static ConfigurableApplicationContext applicationContext;

    public static void main(String[] args) {
        applicationContext = SpringApplication.run(Application.class, args);
    }
}
