package com.maketrip.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maketrip.entity.FlightDetails;
import com.maketrip.repository.FlightDetailsRepo;
import com.maketrip.services.FlightDetailsService;

@Service
public class FlightDetailsimpl implements FlightDetailsService {

	@Autowired
	private FlightDetailsRepo repo;

	@Override
	public FlightDetails createFlights(FlightDetails flightDetails) {
		FlightDetails details = repo.save(flightDetails);
		return details;
	}

	@Override
	public List<FlightDetails> getAllFlights() {
		return repo.findAll();
	}

}
