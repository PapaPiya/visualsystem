package com.visual.dto;

import org.bson.Document;

import java.io.Serializable;

public class ProvinceDTO implements Serializable {

    private static final long serialVersionUID = -9047927532603979357L;

    private String province;
    private String CDMA;
    private String GSM;
    private String UMTS;
    private String LTE;
    private String WCDM;
    private org.bson.Document mnc;

    public ProvinceDTO(String province, String CDMA, String GSM, String UMTS, String LTE, String WCDM, Document mnc) {
        this.province = province;
        this.CDMA = CDMA;
        this.GSM = GSM;
        this.UMTS = UMTS;
        this.LTE = LTE;
        this.WCDM = WCDM;
        this.mnc = mnc;
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

    public Document getMnc() {
        return mnc;
    }

    @Override
    public String toString() {
        return "ProvinceDTO{" +
                "province='" + province + '\'' +
                ", CDMA='" + CDMA + '\'' +
                ", GSM='" + GSM + '\'' +
                ", UMTS='" + UMTS + '\'' +
                ", LTE='" + LTE + '\'' +
                ", WCDM='" + WCDM + '\'' +
                ", mnc=" + mnc +
                '}';
    }
}
