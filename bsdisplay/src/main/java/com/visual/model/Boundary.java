package com.visual.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPolygon;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection = "china_boundary")
public class Boundary {

    @Id
    private Integer id;
    private String name;
    private double[] cp;
    private int childNum;
    private GeoJsonPolygon geometry;

    public Boundary(Integer id, String name, double[] cp, int childNum, GeoJsonPolygon geometry) {
        this.id = id;
        this.name = name;
        this.cp = cp;
        this.childNum = childNum;
        this.geometry = geometry;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double[] getCp() {
        return cp;
    }

    public int getChildNum() {
        return childNum;
    }

    public GeoJsonPolygon getGeometry() {
        return geometry;
    }

    @Override
    public String toString() {
        return "Boundary{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", cp=" + Arrays.toString(cp) +
                ", childNum=" + childNum +
                ", geometry=" + geometry +
                '}';
    }
}
