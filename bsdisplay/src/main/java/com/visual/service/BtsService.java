package com.visual.service;

import com.visual.dto.BtsDTO;
import com.visual.model.Bts;
import org.springframework.data.geo.Point;

import java.util.List;

/**
 * 基站服务层接口
 */
public interface BtsService {

    /**
     * @param lowleft 左下点坐标
     * @param upright 右上点坐标
     * @return java.util.List<com.visual.dto.BtsDTO>
     */
    List<BtsDTO> findBtsByLonAndLat(Point lowleft, Point upright);

    void deleteBtsById(Integer id);

    void insertBts(Bts bts);

    void updateBts(Bts bts);

    List<BtsDTO> listRectAreaBtsByInt(Point lowleft, Point upright);

    List<BtsDTO> findBtsByMcc(int mcc,int mnc,int lac,int cellid,int limit);

    List<BtsDTO> findBtsInBoundary(String name);

    long countBts(double left, double right, double low, double high);

}
