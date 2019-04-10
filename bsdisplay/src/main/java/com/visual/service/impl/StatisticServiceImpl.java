package com.visual.service.impl;

import com.visual.dao.ProvinceRepository;
import com.visual.dao.StatisticRepository;
import com.visual.dto.ProvinceDTO;
import com.visual.dto.StatisticDTO;
import com.visual.model.Statistic;
import com.visual.service.StatisticService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class StatisticServiceImpl implements StatisticService {

    @Resource
    StatisticRepository statisticRepository;

    @Resource
    ProvinceRepository provinceRepository;

    @Override
    public List<Statistic> findAllMcc(){
        return statisticRepository.findById();
    }

    @Override
    public List<ProvinceDTO> findAllProvince(){return provinceRepository.findById();}
}
