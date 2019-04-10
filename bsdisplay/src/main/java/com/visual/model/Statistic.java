package com.visual.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "mcc_bts_num")
public class Statistic implements Serializable {

    private static final long serialVersionUID = -7192952274826345821L;
    @Id
    private Integer id;
    private Integer count;
    private Integer CDMA;
    private Integer GSM;
    private Integer LTE;
    private Integer UMTS;
    private Integer WCDM;
    private org.bson.Document mnc;
    private String country;
    private String country_zh;

    public Statistic(Integer id, Integer count, Integer CDMA, Integer GSM, Integer LTE, Integer UMTS, Integer WCDM, org.bson.Document mnc, String country, String country_zh) {
        this.id = id;
        this.count = count;
        this.CDMA = CDMA;
        this.GSM = GSM;
        this.LTE = LTE;
        this.UMTS = UMTS;
        this.WCDM = WCDM;
        this.mnc = mnc;
        this.country = country;
        this.country_zh = country_zh;
    }

    public Integer getId() {
        return id;
    }

    public Integer getCount() {
        return count;
    }

    public Integer getCDMA() {
        return CDMA;
    }

    public Integer getGSM() {
        return GSM;
    }

    public Integer getLTE() {
        return LTE;
    }

    public Integer getUMTS() {
        return UMTS;
    }

    public Integer getWCDM() {
        return WCDM;
    }

    public org.bson.Document getMnc() {
        return mnc;
    }

    public String getCountry() {
        return country;
    }

    public String getCountry_zh() {
        return country_zh;
    }

    @Override
    public String toString() {
        return "Statistic{" +
                "id=" + id +
                ", value=" + count +
                ", CDMA=" + CDMA +
                ", GSM=" + GSM +
                ", LTE=" + LTE +
                ", UMTS=" + UMTS +
                ", WCDM=" + WCDM +
                ", mnc=" + mnc +
                ", country='" + country + '\'' +
                ", country_zh='" + country_zh + '\'' +
                '}';
    }
}
