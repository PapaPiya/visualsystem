package com.visual.dto;

import java.io.Serializable;

public class BtsDTO implements Serializable {

    private static final long serialVersionUID = 8061044027760022348L;
    /**
     * @author sjc
     * @date 2018/12/4 10:41
     * @Description Basestation返回对象
     */
    private int id;
    private int mnc;
    private int mcc;
    private int lac;
    private int cellid;
    private String radio_type;
    private double lon;
    private double lat;
    private int range;

    public BtsDTO(int id, int mnc, int mcc, int lac, int cellid, String radio_type, double lon, double lat, int range) {
        this.id = id;
        this.mnc = mnc;
        this.mcc = mcc;
        this.lac = lac;
        this.cellid = cellid;
        this.radio_type = radio_type;
        this.lon = lon;
        this.lat = lat;
        this.range = range;
    }

    public String getRadio_type() {
        return radio_type;
    }

    public int getId() {
        return id;
    }

    public int getMnc() {
        return mnc;
    }

    public int getMcc() {
        return mcc;
    }

    public int getLac() {
        return lac;
    }

    public int getCellid() {
        return cellid;
    }

    public double getLon() {
        return lon;
    }

    public double getLat() {
        return lat;
    }

    public int getRange() {
        return range;
    }

    @Override
    public String toString() {
        return "BtsDTO{" +
                "id=" + id +
                ", mnc=" + mnc +
                ", mcc=" + mcc +
                ", lac=" + lac +
                ", cellid=" + cellid +
                ", radio_type='" + radio_type + '\'' +
                ", lon=" + lon +
                ", lat=" + lat +
                ", range=" + range +
                '}';
    }
}
