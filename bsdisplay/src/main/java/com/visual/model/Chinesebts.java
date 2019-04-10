package com.visual.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

/**
 * chinesebts表映射类
 */
@Document(collection = "chinesebts")
public class Chinesebts {

    @Id
    private Integer id;
    private int data_source;
    private String radio_type;
    private int mcc;
    private int mnc;
    private int lac;
    private int cellid;
    private double lat;
    private double lon;
    private int range;
    private int created;
    private int updated;
    private int lonInt;
    private int latInt;
    private GeoJsonPoint location;

    public Chinesebts(int id, int data_source, String radio_type, int mcc, int mnc, int lac,
               int cellid, double lat, double lon, int range, int created, int updated, int lonInt, int latInt,GeoJsonPoint location) {
        this.id = id;
        this.data_source = data_source;
        this.radio_type = radio_type;
        this.mcc = mcc;
        this.mnc = mnc;
        this.lac = lac;
        this.cellid = cellid;
        this.lat = lat;
        this.lon = lon;
        this.range = range;
        this.created = created;
        this.updated = updated;
        this.lonInt = lonInt;
        this.latInt = latInt;
        this.location = location;
    }

    public int getId() {

        return id;
    }

    public int getData_source() {

        return data_source;
    }

    public String getRadio_type() {

        return radio_type;
    }

    public int getMcc() {

        return mcc;
    }

    public int getMnc() {

        return mnc;
    }

    public int getLac() {

        return lac;
    }

    public int getCellid() {

        return cellid;
    }

    public double getLat() {

        return lat;
    }

    public double getLon() {

        return lon;
    }

    public int getRange() {

        return range;
    }

    public int getCreated() {

        return created;
    }

    public int getUpdated() {

        return updated;
    }

    public int getLonInt() {

        return lonInt;
    }

    public int getLatInt() {

        return latInt;
    }

    public GeoJsonPoint getLocation() {
        return location;
    }

    @Override
    public String toString() {
        return "Chinesebts{" +
                "id=" + id +
                ", data_source=" + data_source +
                ", radio_type='" + radio_type + '\'' +
                ", mcc=" + mcc +
                ", mnc=" + mnc +
                ", lac=" + lac +
                ", cellid=" + cellid +
                ", lat=" + lat +
                ", lon=" + lon +
                ", range=" + range +
                ", created=" + created +
                ", updated=" + updated +
                ", lonInt=" + lonInt +
                ", latInt=" + latInt +
                ", location=" + location +
                '}';
    }
}

