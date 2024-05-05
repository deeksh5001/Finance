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

import com.example.demo.dtoRequest.IncomeDto;
import com.example.demo.model.Expense;
import com.example.demo.model.Income;

import com.example.demo.service.IncomeService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name="Income Details")
@RequestMapping("/api/income")
@CrossOrigin
public class IncomeController 
{
	@Autowired
	IncomeService incomeService;
	
	@PostMapping("/save/{id}")
	public ResponseEntity<String> save( @RequestBody IncomeDto income,@PathVariable Long id)
	{
		 boolean isRegistered = incomeService.saveIncome(income, id);
	        return isRegistered ? ResponseEntity.ok("Added successfully")
	                : ResponseEntity.badRequest().body("User does not exist");
	}
	@GetMapping("/getAll")
	public List<Income> getAll()
	{
		return incomeService.getAllIncome();
	}
	@GetMapping("/getSum/{id}")
	public int getSum(@PathVariable Long id)
	{
		return incomeService.getSum(id);
	}
	@GetMapping("/getById/{id}")
	public ResponseEntity<Optional<Income>> get(@PathVariable int id)
	{
		Optional<Income> i= incomeService.getIncome(id);
		return ResponseEntity.ok(i);
	}
	@PutMapping("/update/{id}")
	public String update(@RequestBody Income income,@PathVariable int id)
	{
		Income e=incomeService.updateIncome(income,id);
		if(e==null)
			return "Income not found";
		else
			return "Income updated successfully";
	}
	@GetMapping("/getIncomeByUid/{id}")
	public List<Income> getExpenseByUid(@PathVariable Long id)
	{
		return incomeService.getIncomeByUid(id);
	}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id)
	{
		incomeService.deleteIncome(id);;
	}
	
}
