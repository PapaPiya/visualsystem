package com.visual.controller.vo;

import com.visual.dto.StatisticDTO;
import com.visual.model.Statistic;

import java.io.Serializable;
import java.util.List;

public class StatisticVO extends CommonVO implements Serializable {

    private static final long serialVersionUID = -7709567023152001120L;
    private List<Statistic> list;

    public StatisticVO(List<Statistic> list) {
        this.list = list;
    }

    public StatisticVO(int ret, List<Statistic> list) {
        super(ret);
        this.list = list;
    }

    public StatisticVO(int ret, String msg, List<Statistic> list) {
        super(ret, msg);
        this.list = list;
    }

    public List<Statistic> getList() {
        return list;
    }

    @Override
    public String toString() {
        return "StatisticVO{" +
                "list=" + list +
                '}';
    }
}
