package com.visual.repository;

import com.visual.model.Bts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BtsRepository extends MongoRepository<Bts, String> {

}
