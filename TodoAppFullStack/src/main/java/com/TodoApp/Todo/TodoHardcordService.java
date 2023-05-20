package com.TodoApp.Todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcordService {

	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;

	static {

		todos.add(new Todo(++idCounter, "admin", "Learn to Rect", new Date(), false));
		todos.add(new Todo(++idCounter, "admin", "Learn to Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "admin", "Learn to Microservices 2", new Date(), true));
		todos.add(new Todo(++idCounter, "admin", "Learn to DSA", new Date(), true));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo Save(Todo todo) {

		if (todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

	public Todo deleteById(long id) {

		Todo todo = findById(id);

		if (todo == null)
			return null;
		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {

		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
