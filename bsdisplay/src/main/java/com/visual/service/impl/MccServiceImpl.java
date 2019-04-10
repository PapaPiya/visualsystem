package com.visual.service.impl;

import com.visual.dao.MccRepository;
import com.visual.dto.MccDTO;
import com.visual.service.MccService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MccServiceImpl implements MccService {

    @Resource
    MccRepository mccRepository;

    @Override
    public List<MccDTO> findMcc(){
        return mccRepository.findByMcc();
    }
}
