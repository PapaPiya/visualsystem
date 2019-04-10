package com.visual.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "gridlevelthree")
public class GridLevelThree{

    @Id
    private Integer id;
    private double centerLon;
    private double centerLat;
    private int CDMA;
    private int GSM;
    private int UMTS;
    private int LTE;
    private int WCDM;
    private int btsNum;
    private org.bson.Document ispNum;

    public GridLevelThree(Integer id, double centerLon, double centerLat, int CDMA, int GSM, int UMTS, int LTE, int WCDM, int btsNum, org.bson.Document ispNum) {
        this.id = id;
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

    public Integer getId() {
        return id;
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
        return "GridLevelThree{" +
                "id=" + id +
                ", centerLon=" + centerLon +
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
