package com.visual.dto;

import java.io.Serializable;

public class MccDTO implements Serializable {

    private static final long serialVersionUID = 511003194553290323L;
    private String country;
    private String country_zh;
    private int mcc;

    public MccDTO(String country, String country_zh, int mcc) {
        this.country = country;
        this.country_zh = country_zh;
        this.mcc = mcc;
    }

    public String getCountry() {
        return country;
    }

    public String getCountry_zh() {
        return country_zh;
    }

    public int getMcc() {
        return mcc;
    }

    @Override
    public String toString() {
        return "MccDTO{" +
                "country='" + country + '\'' +
                ", country_zh='" + country_zh + '\'' +
                ", mcc=" + mcc +
                '}';
    }
}
