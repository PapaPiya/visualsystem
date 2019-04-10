package com.visual.dao;

import com.visual.dto.BtsDTO;
import com.visual.model.Bts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface BtsRepository extends MongoRepository<Bts, String> {

    @Query(value = "{ 'lonInt' : {$gte:?0 , $lte:?1}, 'latInt' : {$gte:?2, $lte:?3}, 'lon' : {$gte:?4, $lte:?5}, 'lat': {$gte:?6, $lte:?7}}", fields = "{ '_id' : 1, 'mcc' : 1, 'mnc' : 1, 'lac' : 1, 'cellid' : 1,'radio_type' : 1, 'lat' : 1, 'lon' : 1, 'range' : 1}")
    List<BtsDTO> findBtsByLonAndLat(int lonIntMin, int lonIntMax, int latIntMin, int latIntMax, double lonMin, double lonMax, double latMin, double latMax);

}
