package com.visual.dao;


import com.visual.model.Bts;
import com.visual.model.Chinesebts;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>基站持久层接口类</p>
 */
@Repository
public interface BtsDao {

    /**
     * <p>搜索区域内基站</p>
     */
    List<Bts> listRectAreaBts(Point lowleft, Point upright);

    /**
     * <p>搜索整经度区域内基站</p>
     */
    List<Bts> listRectAreaBtsByInt(Point lowleft, Point upright);

    void deleteBtsById(Integer id);

    void insertBts(Bts bts);

    void updateBts(Bts bts);

    void mapReduce();

    List<Bts> findBtsByMcc(int mcc,int mnc,int lac,int cellid,int limit);

    List<Chinesebts> findBtsInBoundary(String name);

    long countBts(double left, double right, double low, double high);

}
