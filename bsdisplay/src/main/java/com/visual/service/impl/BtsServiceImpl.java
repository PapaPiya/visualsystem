package com.visual.service.impl;

import com.visual.dao.BtsDao;
import com.visual.dao.BtsRepository;
import com.visual.dto.BtsDTO;
import com.visual.model.Bts;
import com.visual.model.Chinesebts;
import com.visual.service.BtsService;
import org.springframework.data.geo.Point;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * 基站crud服务层
 */
@Service
public class BtsServiceImpl implements BtsService {

    /**
     * BtsDao层对象，使用模块查询
     */
    @Resource
    private BtsDao btsDao;

    /**
     * BtsRepository对象，使用jpa查询
     */
    @Resource
    private BtsRepository btsRepository;

    @Override
    public List<BtsDTO> findBtsByLonAndLat(Point lowleft, Point upright) {
        double[] lon = {lowleft.getX(), upright.getX()};
        double[] lat = {lowleft.getY(), upright.getY()};
        Integer[] xArray = new Integer[]{(int) lon[0], (int) lon[1]};
        Integer[] yArray = new Integer[]{(int) lat[0], (int) lat[1]};
        return btsRepository.findBtsByLonAndLat(xArray[0], xArray[1], yArray[0], yArray[1],
                lon[0], lon[1], lat[0], lat[1]);
    }
    @Override
    public List<BtsDTO> findBtsInBoundary(String name){
        List<Chinesebts> list = btsDao.findBtsInBoundary(name);
        if(list == null){
            return null;
        }
        List<BtsDTO> result = new ArrayList<>();
        Iterator<Chinesebts> it = list.iterator();
        while(it.hasNext()){
            Chinesebts bts = it.next();
            BtsDTO btsDTO = new BtsDTO(bts.getId(),bts.getMnc(),bts.getMcc(),bts.getLac(),bts.getCellid(),
                    bts.getRadio_type(),bts.getLon(), bts.getLat(),bts.getRange());
            result.add(btsDTO);
        }
        return result;
    }

    @Override
    public List<BtsDTO> findBtsByMcc(int mcc,int mnc,int lac,int cellid,int limit){
        List<Bts> list = btsDao.findBtsByMcc(mcc, mnc, lac, cellid, limit);
        List<BtsDTO> result = new ArrayList<>();
        Iterator<Bts> it = list.iterator();
        while(it.hasNext()){
            Bts bts = it.next();
            BtsDTO btsDTO = new BtsDTO(bts.getId(),bts.getMnc(),bts.getMcc(),bts.getLac(),bts.getCellid(),
                    bts.getRadio_type(),bts.getLon(), bts.getLat(),bts.getRange());
            result.add(btsDTO);
        }
        return result;
    }

    @Override
    public void deleteBtsById(Integer id){
        btsDao.deleteBtsById(id);
    }

    @Override
    public void insertBts(Bts bts){
        btsDao.insertBts(bts);
    }

    @Override
    public void updateBts(Bts bts){
        btsDao.updateBts(bts);
    }

    @Override
    public long countBts(double left, double right, double low, double high){
        return  btsDao.countBts(left, right, low, high);
    }

    @Override
    public List<BtsDTO> listRectAreaBtsByInt(Point lowleft, Point upright){
        List<Bts> list =  btsDao.listRectAreaBtsByInt(lowleft, upright);
        List<BtsDTO> bslist = new ArrayList<BtsDTO>();
        Iterator<Bts> it = list.iterator();
        while(it.hasNext()){
            Bts bts = it.next();
            BtsDTO btsDTO = new BtsDTO(bts.getId(),bts.getMnc(),bts.getMcc(),bts.getLac(),bts.getCellid(),
                    bts.getRadio_type(),bts.getLon(), bts.getLat(),bts.getRange());
            bslist.add(btsDTO);
        }
        return bslist;
    }

}
