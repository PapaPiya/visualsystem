package com.visual.dto;

import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;

public class GridDTO implements Serializable {

    private static final long serialVersionUID = -6401777643343697202L;
    @Field("centerLon")
    private double centerLon;
    @Field("centerLat")
    private double centerLat;
    private int btsNum;

    public GridDTO(){}

    public GridDTO(double centerLon, double centerLat, int btsNum) {
        this.centerLon = centerLon;
        this.centerLat = centerLat;
        this.btsNum = btsNum;
    }

    public double getCenterLon() {
        return centerLon;
    }

    public double getCenterLat() {
        return centerLat;
    }

    public int getBtsNum() {
        return btsNum;
    }

    @Override
    public String toString() {
        return "GridDTO{" +
                "centerLon=" + centerLon +
                ", centerLat=" + centerLat +
                ", btsNum=" + btsNum +
                '}';
    }
}
