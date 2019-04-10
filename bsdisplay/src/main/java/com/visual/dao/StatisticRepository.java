package com.visual.dao;

import com.visual.dto.StatisticDTO;
import com.visual.model.Statistic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatisticRepository extends MongoRepository<Statistic,String> {

    @Query(value = "{}")
    List<Statistic> findById();
}
