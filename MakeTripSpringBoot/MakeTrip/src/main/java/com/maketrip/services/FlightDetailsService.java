package com.maketrip.services;

import java.util.List;

import com.maketrip.entity.FlightDetails;

public interface FlightDetailsService {

	 FlightDetails createFlights(FlightDetails flightDetails);
	 
	 List<FlightDetails> getAllFlights();
}
