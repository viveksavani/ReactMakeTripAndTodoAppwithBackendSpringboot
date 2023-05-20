package com.maketrip.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.maketrip.entity.UserDetails;

public interface UserDetailsRepo extends JpaRepository<UserDetails, Integer> {

	public UserDetails findByEmailAndPassword(String email,String password);
}
