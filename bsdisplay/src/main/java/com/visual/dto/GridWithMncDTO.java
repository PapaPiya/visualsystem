package com.visual.dto;

import java.io.Serializable;

public class GridWithMncDTO implements Serializable {

    private static final long serialVersionUID = -797676241110132240L;
    private double centerLon;
    private double centerLat;
    private int btsNum;
    private org.bson.Document ispNum;

    public GridWithMncDTO(double centerLon, double centerLat, int btsNum, org.bson.Document ispNum) {
        this.centerLon = centerLon;
        this.centerLat = centerLat;
        this.ispNum = ispNum;
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

    public org.bson.Document getIspNum() {
        return ispNum;
    }

    @Override
    public String toString() {
        return "GridAllDTO{" +
                "centerLon=" + centerLon +
                ", centerLat=" + centerLat +
                ", btsNum=" + btsNum +
                ", ispNum=" + ispNum +
                '}';
    }
}
