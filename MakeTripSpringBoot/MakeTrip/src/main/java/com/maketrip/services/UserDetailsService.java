package com.maketrip.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.maketrip.entity.UserDetails;
import com.maketrip.repository.UserDetailsRepo;

public interface UserDetailsService {

	public UserDetails createUser(UserDetails user);
	
	public List<UserDetails> getAllUsers();
	
	public UserDetails login(String email,String password);
}
