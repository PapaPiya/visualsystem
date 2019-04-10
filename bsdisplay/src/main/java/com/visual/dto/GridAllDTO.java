package com.visual.dto;

import java.io.Serializable;

public class GridAllDTO implements Serializable {

    private static final long serialVersionUID = 7072553674297706097L;
    private double centerLon;
    private double centerLat;
    private int CDMA;
    private int GSM;
    private int UMTS;
    private int LTE;
    private int WCDM;
    private int btsNum;
    private org.bson.Document ispNum;

    public GridAllDTO(double centerLon, double centerLat, int CDMA, int GSM, int UMTS, int LTE, int WCDM, int btsNum, org.bson.Document ispNum) {
        this.centerLon = centerLon;
        this.centerLat = centerLat;
        this.CDMA = CDMA;
        this.GSM = GSM;
        this.UMTS = UMTS;
        this.LTE = LTE;
        this.WCDM = WCDM;
        this.btsNum = btsNum;
        this.ispNum = ispNum;
    }

    public double getCenterLon() {
        return centerLon;
    }

    public double getCenterLat() {
        return centerLat;
    }

    public int getCDMA() {
        return CDMA;
    }

    public int getGSM() {
        return GSM;
    }

    public int getUMTS() {
        return UMTS;
    }

    public int getLTE() {
        return LTE;
    }

    public int getWCDM() {
        return WCDM;
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
                ", CDMA=" + CDMA +
                ", GSM=" + GSM +
                ", UMTS=" + UMTS +
                ", LTE=" + LTE +
                ", WCDM=" + WCDM +
                ", btsNum=" + btsNum +
                ", ispNum=" + ispNum +
                '}';
    }
}
