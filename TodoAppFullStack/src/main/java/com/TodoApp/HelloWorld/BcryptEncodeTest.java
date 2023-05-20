package com.TodoApp.HelloWorld;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncodeTest {

	public static void main(String[] args) {

		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String encode = encoder.encode("savani");
		System.out.println(encode);
	}

}
