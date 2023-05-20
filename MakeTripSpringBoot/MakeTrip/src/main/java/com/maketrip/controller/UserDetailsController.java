package com.maketrip.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.maketrip.entity.UserDetails;
import com.maketrip.impl.UserDetailsImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserDetailsController {

	@Autowired
	private UserDetailsImpl userDetailsImpl;

	@PostMapping("/userDetails")
	public ResponseEntity<UserDetails> createUser(@RequestBody UserDetails user) {

		UserDetails userDetails = userDetailsImpl.createUser(user);
		return new ResponseEntity<UserDetails>(userDetails, HttpStatus.CREATED);
	}

	@GetMapping("/getAllUsers")
	public ResponseEntity<List<UserDetails>> getAllUsers() {
		List<UserDetails> allUsers = userDetailsImpl.getAllUsers();
		return ResponseEntity.ok(allUsers);
	}

	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<UserDetails> login(@PathVariable String email, @PathVariable String password) {
		UserDetails userDetails = userDetailsImpl.login(email, password);
		System.out.println(userDetails);
		if (userDetails != null) {
			return ResponseEntity.ok(userDetails);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}
