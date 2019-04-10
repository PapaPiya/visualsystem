package com.visual.dao;

import com.visual.dto.GridDTO;
import com.visual.model.GridLevelOne;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GridOneRepository  extends MongoRepository<GridLevelOne, String> {

    @Query(value = "{ 'centerLon' : {$gte : ?0, $lte:?1 },'centerLat' : {$gte : ?2, $lte:?3 } }", fields = "{ 'centerLon' : 1, 'centerLat' : 1,  'btsNum' : 1}")
    List<GridDTO> findByLevel(double leftPos, double rightPos, double lowPos, double highPos);

}