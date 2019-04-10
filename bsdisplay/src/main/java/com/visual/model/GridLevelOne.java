package com.visual.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "gridlevelone")
public class GridLevelOne{

    @Id
    private Integer id;
    private double centerLon;
    private double centerLat;
    private double left;
    private double right;
    private double low;
    private double high;
    private int btsNum;

    public GridLevelOne(Integer id, double centerLon, double centerLat, double left, double right, double low, double high, int btsNum) {
        this.id = id;
        this.centerLon = centerLon;
        this.centerLat = centerLat;
        this.left = left;
        this.right = right;
        this.low = low;
        this.high = high;
        this.btsNum = btsNum;
    }

    public Integer getId() {
        return id;
    }

    public double getCenterLon() {
        return centerLon;
    }

    public double getCenterLat() {
        return centerLat;
    }

    public double getLeft() {
        return left;
    }

    public double getRight() {
        return right;
    }

    public double getLow() {
        return low;
    }

    public double getHigh() {
        return high;
    }

    public int getBtsNum() {
        return btsNum;
    }

    @Override
    public String toString() {
        return "GridLevelOne{" +
                "id=" + id +
                ", centerLon=" + centerLon +
                ", centerLat=" + centerLat +
                ", left=" + left +
                ", right=" + right +
                ", low=" + low +
                ", high=" + high +
                ", btsNum=" + btsNum +
                '}';
    }
}
