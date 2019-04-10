package com.visual.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "mcc")
public class Mcc {

    @Id
    private ObjectId  id;
    private String country;
    private String country_zh;
    private int mcc;

    public Mcc(ObjectId  id, String country, String country_zh, int mcc) {
        this.id = id;
        this.country = country;
        this.country_zh = country_zh;
        this.mcc = mcc;
    }

    public String getCountry() {
        return country;
    }

    public String getCountry_zh() {
        return country_zh;
    }

    public int getMcc() {
        return mcc;
    }

    public ObjectId getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Mcc{" +
                "id=" + id +
                ", country='" + country + '\'' +
                ", country_zh='" + country_zh + '\'' +
                ", mcc=" + mcc +
                '}';
    }
}
