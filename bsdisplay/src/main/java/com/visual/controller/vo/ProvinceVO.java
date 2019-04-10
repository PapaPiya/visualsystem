package com.visual.controller.vo;

import com.visual.dto.ProvinceDTO;

import java.io.Serializable;
import java.util.List;

public class ProvinceVO extends CommonVO implements Serializable {

    private static final long serialVersionUID = 7038547019829914149L;
    private List<ProvinceDTO> list;

    public ProvinceVO(List<ProvinceDTO> list) {
        this.list = list;
    }

    public ProvinceVO(int ret, List<ProvinceDTO> list) {
        super(ret);
        this.list = list;
    }

    public ProvinceVO(int ret, String msg, List<ProvinceDTO> list) {
        super(ret, msg);
        this.list = list;
    }

    public List<ProvinceDTO> getList() {
        return list;
    }

    @Override
    public String toString() {
        return "ProvinceVO{" +
                "list=" + list +
                '}';
    }
}
