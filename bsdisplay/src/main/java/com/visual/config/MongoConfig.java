package com.visual.config;

import com.mongodb.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


/**
 * @author sjc
 * @date 2018/11/29 10:22
 * @Description MongoDB配置类
 */
@Configuration
@PropertySource("classpath:/mongodb.properties")
public class MongoConfig extends AbstractMongoConfiguration {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Value("${mongodb.host}")
    private String mongodbHost;
    @Value("${mongodb.port}")
    private int mongodbPort;
    @Value("${mongodb.name}")
    private String mongodbName;
    @Value("${mongodb.user}")
    private String mongodbUser;
    @Value("${mongodb.password}")
    private String mongodbPwd;
    @Value("${mongodb.authentification}")
    private boolean authentification;

    @Override
    public MongoClient mongoClient() {

        MongoClient mongoClient;
        MongoCredential credential = MongoCredential.createCredential(mongodbUser, "admin", mongodbPwd.toCharArray());
        MongoClientOptions options = MongoClientOptions.builder().connectionsPerHost(3000).
                threadsAllowedToBlockForConnectionMultiplier(100).readPreference(ReadPreference.nearest()).build();
        List<ServerAddress> addresses = new ArrayList<ServerAddress>();
        String[] str = this.mongodbHost.split(",");

        for (String strHost : str) {
            ServerAddress address = new ServerAddress(strHost, mongodbPort);
            addresses.add(address);
        }

        if (authentification) {
            mongoClient = new MongoClient(addresses, Arrays.asList(credential), options);
        } else {
            mongoClient = new MongoClient(addresses, options);
        }
        return mongoClient;
    }

    @Override
    protected String getDatabaseName() {
        return mongodbName;
    }

    public @Bean
    MongoTemplate mongoTemplate() {
        MongoTemplate mongoTemplate = new MongoTemplate(mongoClient(), mongodbName);
        logger.info("connect mongo : " + mongoTemplate.getDb().getName() + " library");
        return mongoTemplate;
    }
}
