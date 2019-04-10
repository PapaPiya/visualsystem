package com.visual.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "chinese_statistics")
public class ProvinceStatistics {

    @Id
    private Integer id;
    private String province;
    private String CDMA;
    private String GSM;
    private String UMTS;
    private String LTE;
    private String WCDM;
    private org.bson.Document mnc;

    public ProvinceStatistics(Integer id, String province, String CDMA, String GSM, String UMTS, String LTE, String WCDM, org.bson.Document mnc) {
        this.id = id;
        this.province = province;
        this.CDMA = CDMA;
        this.GSM = GSM;
        this.UMTS = UMTS;
        this.LTE = LTE;
        this.WCDM = WCDM;
        this.mnc = mnc;
    }

    public Integer getId() {
        return id;
    }

    public String getProvince() {
        return province;
    }

    public String getCDMA() {
        return CDMA;
    }

    public String getGSM() {
        return GSM;
    }

    public String getUMTS() {
        return UMTS;
    }

    public String getLTE() {
        return LTE;
    }

    public String getWCDM() {
        return WCDM;
    }

    public org.bson.Document getMnc() {
        return mnc;
    }

    @Override
    public String toString() {
        return "ProvinceStatistics{" +
                "id=" + id +
                ", province='" + province + '\'' +
                ", CDMA='" + CDMA + '\'' +
                ", GSM='" + GSM + '\'' +
                ", UMTS='" + UMTS + '\'' +
                ", LTE='" + LTE + '\'' +
                ", WCDM='" + WCDM + '\'' +
                ", mnc=" + mnc +
                '}';
    }
}
