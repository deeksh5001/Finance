package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtoRequest.ExpenseDto;
import com.example.demo.model.Expense;
import com.example.demo.service.ExpenseService;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.websocket.server.PathParam;



@RestController
@Tag(name="Expense Details")
@RequestMapping("/api/expense")
@CrossOrigin
public class ExpenseController 
{
	@Autowired
	ExpenseService expenseService;
	
	@PostMapping("/save/{id}")
	public ResponseEntity<String> save( @RequestBody ExpenseDto expense,@PathVariable Long id)
	{
		 boolean isRegistered = expenseService.saveExpense(expense, id);
	        return isRegistered ? ResponseEntity.ok("Added successfully")
	                : ResponseEntity.badRequest().body("User does not exist");
	}
	
	@GetMapping("/getAll")
	public List<Expense> getAll()
	{
		return expenseService.getAllExpense();
	}
	
	@GetMapping("/getExpenseByUid/{id}")
	public List<Expense> getExpenseByUid(@PathVariable Long id)
	{
		return expenseService.getExpenseByUid(id);
	}
	
	@GetMapping("/getSum/{id}")
	public int getSum(@PathVariable Long id)
	{
		return expenseService.getSum(id);
	}
	
	@GetMapping("/getById/{id}")
	public ResponseEntity<Optional<Expense>> get(@PathVariable int id)
	{
		Optional<Expense> i= expenseService.getExpense(id);
		return ResponseEntity.ok(i);
	}
	
	@PutMapping("/update/{id}")
	public String update(@RequestBody Expense expense,@PathVariable int id)
	{
		Expense e=expenseService.updateExpense(expense,id);
		if(e==null)
			return "Expense not found";
		else
			return "Expense updated successfully";
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id)
	{
		expenseService.deleteExpense(id);;
	}
}
