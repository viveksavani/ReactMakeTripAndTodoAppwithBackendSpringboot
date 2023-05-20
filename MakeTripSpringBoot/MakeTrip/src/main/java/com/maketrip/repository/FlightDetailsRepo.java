package com.maketrip.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maketrip.entity.FlightDetails;


public interface FlightDetailsRepo extends JpaRepository<FlightDetails, Integer>{

}
