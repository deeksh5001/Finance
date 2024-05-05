package com.example.demo.service;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtoRequest.ExpenseDto;
import com.example.demo.model.Expense;
import com.example.demo.model.User;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.repository.UserRepository;

@Service
public class ExpenseService {

	@Autowired
	ExpenseRepository expenseRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public boolean saveExpense(ExpenseDto e,Long id)
	{
		Optional<User> isUserExists = userRepository.findById(id);
        if (isUserExists.isPresent()) {
		var expense= Expense.builder()
					.expAmount(e.getExpAmount())
					.category(e.getCategory())
					.date(e.getDate())
					.build();
		
		User user=new User();
		 User findById = userRepository.findByUid(id);
		 List<Expense> array= findById.getExpenses();
		 System.out.println(findById);
		user.setUid(findById.getUid());
		user.setEmail(findById.getEmail());
		user.setName(findById.getName());
		user.setPassword(findById.getPassword());
		user.setRole(findById.getRole());
		user.setIsEnabled(findById.getIsEnabled());
		user.setIncomes(findById.getIncomes());
		array.add(expense);
		user.setExpenses(array);
		Expense save = expenseRepository.save(expense);
		System.err.println(save);
		userRepository.save(user);
		
		return true;
		}
        else {
        	return false;
        }
	}
	
	public List<Expense> getAllExpense()
	{
		return expenseRepository.findAll();
	}
	
	public Optional<Expense> getExpense(int id)
	{
		return expenseRepository.findById(id);
	}
	public List<Expense> getExpenseByUid(Long uid)
	{
		User findById = userRepository.findByUid(uid);
		return findById.getExpenses();
		
	}
	public int getSum(Long uid)
	{
		User findById = userRepository.findByUid(uid);
		List<Expense> e=findById.getExpenses();
		int sum=0;
		for(Expense x:e)
		{
			sum+=x.getExpAmount();
		}
		return sum;
	}
	public Expense updateExpense(Expense expense,int id)
	{
		Optional<Expense> e=expenseRepository.findById(id);
		
		if(e.isPresent())
			return expenseRepository.save(expense);
		else 
			return null;
		
	}
	
	public void deleteExpense(int id)
	{
		expenseRepository.deleteById(id);
	}
}
