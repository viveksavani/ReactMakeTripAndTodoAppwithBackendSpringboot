package com.TodoApp.HelloWorld;

public class HelloWorldBean {

	
	private String message;
	private String name;

	public HelloWorldBean(String message,String name) {
		this.message = message;
		this.name = name;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMessage() {
		return message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	
	
}
