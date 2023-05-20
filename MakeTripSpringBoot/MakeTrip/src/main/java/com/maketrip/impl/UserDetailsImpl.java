package com.maketrip.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;


import com.maketrip.entity.UserDetails;
import com.maketrip.repository.UserDetailsRepo;
import com.maketrip.services.UserDetailsService;

@Service
public class UserDetailsImpl implements UserDetailsService {

	@Autowired
	private UserDetailsRepo repo;

	@Override
	public UserDetails createUser(UserDetails user) {

		UserDetails userDetails = repo.save(user);
		return userDetails;
	}

	@Override
	public List<UserDetails> getAllUsers() {
		List<UserDetails> all = repo.findAll();
		return all;
	}

	@Override
	public UserDetails login(String email, String password) {
		UserDetails userDetails = repo.findByEmailAndPassword(email, password);
		return userDetails;
	}

}
