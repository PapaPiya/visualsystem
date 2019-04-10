package com.visual.dao;

import com.visual.dto.MccDTO;
import com.visual.model.Mcc;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MccRepository extends MongoRepository<Mcc,String> {

    @Query(value = "{}",fields = "{ 'country' : 1, 'country_zh' : 1,'mcc' : 1}")
    List<MccDTO> findByMcc();
}
