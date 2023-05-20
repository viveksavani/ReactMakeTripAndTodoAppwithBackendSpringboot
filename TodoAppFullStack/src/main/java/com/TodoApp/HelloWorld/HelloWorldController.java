package com.TodoApp.HelloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

	@GetMapping("/hello")
	public String hello() {
		return "hello -world";
	}

	@GetMapping("/hello-bean")
	public HelloWorldBean helloBean() {

		HelloWorldBean h = new HelloWorldBean("hello World from bean", "vivek");
		System.out.println(h);
		return h;
	}

	@GetMapping("/hello-path/{name}")
	public HelloWorldBean helloBean(@PathVariable String name) {

		HelloWorldBean h = new HelloWorldBean(String.format("hello World from bean", "%s"), name);
		System.out.println(h);
		return h;
	}

}
