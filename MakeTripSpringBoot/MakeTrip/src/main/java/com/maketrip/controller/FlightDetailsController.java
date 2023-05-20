package com.maketrip.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.maketrip.entity.FlightDetails;
import com.maketrip.impl.FlightDetailsimpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FlightDetailsController {

	@Autowired
	private FlightDetailsimpl detailsimpl;

	@PostMapping("/flightDetail")
	public ResponseEntity<FlightDetails> createFlights(@RequestBody FlightDetails details) {
		details.setDepartureDate(new Date());
		FlightDetails flights = detailsimpl.createFlights(details);
		return new ResponseEntity(flights, HttpStatus.CREATED);

	}

	@GetMapping("/flightDetail")
	public ResponseEntity<List<FlightDetails>> getAllFlights() {
		List<FlightDetails> allFlights = detailsimpl.getAllFlights();
		return new ResponseEntity(allFlights, HttpStatus.OK);
	}
}
