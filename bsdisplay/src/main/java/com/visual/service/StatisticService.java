package com.visual.service;

import com.visual.dto.ProvinceDTO;
import com.visual.dto.StatisticDTO;
import com.visual.model.Statistic;

import java.util.List;

public interface StatisticService {

    List<Statistic> findAllMcc();

    List<ProvinceDTO> findAllProvince();
}
