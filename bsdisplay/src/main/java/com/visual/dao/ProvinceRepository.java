package com.visual.dao;

import com.visual.dto.ProvinceDTO;
import com.visual.model.ProvinceStatistics;
import com.visual.model.Statistic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProvinceRepository extends MongoRepository<ProvinceStatistics,String> {

    @Query(value = "{}",fields = "{ 'province' : 1,'CDMA' : 1,'GSM' : 1,'UMTS' : 1,'LTE' : 1, 'WCDM' : 1,'mcc' : 1}")
    List<ProvinceDTO> findById();
}
