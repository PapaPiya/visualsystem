package com.visual.dao.impl;

import com.visual.dao.BtsDao;
import com.visual.model.Boundary;
import com.visual.model.Bts;
import com.visual.model.Chinesebts;
import org.springframework.data.domain.Range;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.mapreduce.MapReduceResults;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;

/**
 * <p>基站持久层实现类</p>
 */
@Repository
public class BtsDaoImpl implements BtsDao {

    /**
     * MongoTemplate对象，调用模板查询
     */
    @Resource
    private MongoTemplate mongoTemplate;

    @Override
    public List<Bts> listRectAreaBts(Point lowleft, Point upright) {

        Query query = new Query();
        query.addCriteria(where("lon").gte(lowleft.getX()).lte(upright.getX()));
        query.addCriteria(where("lat").gte(lowleft.getY()).lte(upright.getY()));
        return mongoTemplate.find(query, Bts.class);

    }

    @Override
    public List<Bts> listRectAreaBtsByInt(Point lowleft, Point upright) {

        Query query = new Query();
        Integer[] xArray = new Integer[]{(int) Math.floor(lowleft.getX()), (int) Math.floor(upright.getX())};
        Integer[] yArray = new Integer[]{(int) Math.floor(lowleft.getY()), (int) Math.floor(upright.getY())};
        query.addCriteria(where("lonInt").gte((xArray[0])).lte((xArray[1])));
        query.addCriteria(where("latInt").gte((yArray[0])).lte((yArray[1])));

        return mongoTemplate.find(query.skip(1000), Bts.class);
    }

    @Override
    public void deleteBtsById(Integer id){
        Query query = new Query();
        query.addCriteria(where("_id").is(id));
        mongoTemplate.remove(query, Bts.class);
    }

    @Override
    public void insertBts(Bts bts){
        mongoTemplate.insert(bts);
    }

    @Override
    public void updateBts(Bts bts){
        mongoTemplate.save(bts);
    }

    @Override
    public void mapReduce(){
        MapReduceResults<Bts> results = mongoTemplate.mapReduce("bts", "classpath:map.js", "classpath:reduce.js", Bts.class);
        for (Bts bts : results) {
            System.out.println(bts);
        }
    }

    @Override
    public List<Chinesebts> findBtsInBoundary(String name){
        Query query1 = new Query();
        query1.addCriteria(where("name").is(name));
        System.out.println(name);
        Boundary boundary = mongoTemplate.findOne(query1,Boundary.class);
        if(boundary == null){
            return null;
        }
        Query query2 = new Query();
        query2.addCriteria(where("location").within(boundary.getGeometry()));

        return  mongoTemplate.find(query2, Chinesebts.class);
    }

    @Override
    public List<Bts> findBtsByMcc(int mcc,int mnc,int lac,int cellid,int limit){
        Query query = new Query();
        query.addCriteria(where("mcc").is(mcc));
        if(mnc != -1){
            query.addCriteria(where("mnc").is(mnc));
        }
        if(lac != -1){
            query.addCriteria(where("lac").is(lac));
        }
        if(cellid != -1){
            query.addCriteria(where("cellid").is(cellid));
        }
        return mongoTemplate.find(query.limit(limit),Bts.class);
    }

    @Override
    public long countBts(double left, double right, double low, double high){

        Query query = new Query();
        query.addCriteria(where("lonInt").gte(Math.floor(left)).lte(Math.floor(right)));
        query.addCriteria(where("latInt").gte(Math.floor(low)).lte(Math.floor(high)));
        query.addCriteria(where("lon").gte(left).lte(right));
        query.addCriteria(where("lat").gte(low).lte(high));
        return mongoTemplate.count(query,Bts.class);
    }
}
