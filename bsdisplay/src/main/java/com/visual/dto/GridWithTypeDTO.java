package com.visual.dto;

import java.io.Serializable;

public class GridWithTypeDTO implements Serializable {
    private static final long serialVersionUID = -1722459003369290133L;
    private double centerLon;
    private double centerLat;
    private int CDMA;
    private int GSM;
    private int UMTS;
    private int LTE;
    private int WCDM;
    private int btsNum;

    public GridWithTypeDTO(double centerLon, double centerLat, int CDMA, int GSM, int UMTS, int LTE, int WCDM, int btsNum) {
        this.centerLon = centerLon;
        this.centerLat = centerLat;
        this.CDMA = CDMA;
        this.GSM = GSM;
        this.UMTS = UMTS;
        this.LTE = LTE;
        this.WCDM = WCDM;
        this.btsNum = btsNum;
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
                '}';
    }
}
