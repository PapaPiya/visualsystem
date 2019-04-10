package com.visual.dao;

import com.visual.dto.GridAllDTO;
import com.visual.dto.GridDTO;
import com.visual.dto.GridWithMncDTO;
import com.visual.dto.GridWithTypeDTO;
import com.visual.model.GridLevelThree;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GridThreeRepository  extends MongoRepository<GridLevelThree, String> {

    @Query(value = "{ 'centerLon' : {$gte : ?0, $lte:?1 },'centerLat' : {$gte : ?2, $lte:?3 } }", fields = "{ 'centerLon' : 1, 'centerLat' : 1,  'btsNum' : 1}")
    List<GridDTO> findByLevel(double leftPos, double rightPos, double lowPos, double highPos);

    @Query(value = "{ 'centerLon' : {$gte : ?0, $lte:?1 },'centerLat' : {$gte : ?2, $lte:?3 } }", fields = "{ 'centerLon' : 1, 'centerLat' : 1,  'btsNum' : 1,'CDMA':1,'GSM':1,'UMTS':1,'LTE':1,'WCDM':1,'ispNum':1}")
    List<GridAllDTO> findByLevelAll(double leftPos, double rightPos, double lowPos, double highPos);

    @Query(value = "{ 'centerLon' : {$gte : ?0, $lte:?1 },'centerLat' : {$gte : ?2, $lte:?3 } }", fields = "{ 'centerLon' : 1, 'centerLat' : 1,  'btsNum' : 1,'CDMA':1,'GSM':1,'UMTS':1,'LTE':1,'WCDM':1}")
    List<GridWithTypeDTO> findByTestWithType(double leftPos, double rightPos, double lowPos, double highPos);

    @Query(value = "{ 'centerLon' : {$gte : ?0, $lte:?1 },'centerLat' : {$gte : ?2, $lte:?3 } }", fields = "{ 'centerLon' : 1, 'centerLat' : 1,  'btsNum' : 1,'ispNum':1}")
    List<GridWithMncDTO> findByTestWithMnc(double leftPos, double rightPos, double lowPos, double highPos);

}