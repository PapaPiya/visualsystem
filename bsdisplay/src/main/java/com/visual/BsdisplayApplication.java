package com.visual;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableCaching
@EnableMongoRepositories("com.visual.dao")
public class BsdisplayApplication {

    public static void main(String[] args) {
        SpringApplication.run(BsdisplayApplication.class, args);
    }
}
