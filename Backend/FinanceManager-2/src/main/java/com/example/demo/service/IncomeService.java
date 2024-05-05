package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtoRequest.IncomeDto;
import com.example.demo.model.Income;
import com.example.demo.model.User;
import com.example.demo.repository.IncomeRepository;
import com.example.demo.repository.UserRepository;

@Service
public class IncomeService {

	@Autowired
	IncomeRepository incomeRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public boolean saveIncome(IncomeDto e,Long id)
	{
		Optional<User> isUserExists = userRepository.findById(id);
        if (isUserExists.isPresent()) {
		var income= Income.builder()
					.incAmount(e.getIncAmount())
					.incCategory(e.getIncCategory())
					.build();
		
		User user=new User();
		 User findById = userRepository.findByUid(id);
		 List<Income> array= findById.getIncomes();
		 System.out.println(findById);
		 
		user.setUid(findById.getUid());
		user.setEmail(findById.getEmail());
		user.setName(findById.getName());
		user.setPassword(findById.getPassword());
		user.setRole(findById.getRole());
		user.setIsEnabled(findById.getIsEnabled());
		user.setExpenses(findById.getExpenses());
		array.add(income);
		user.setIncomes(array);
		Income save = incomeRepository.save(income);
		System.err.println(save);
		userRepository.save(user);
		
		return true;
		}
        else {
        	return false;
        }
	}
	
	public List<Income> getAllIncome()
	{
		return incomeRepository.findAll();
	}
	
	public Optional<Income> getIncome(int id)
	{
		return incomeRepository.findById(id);
	}
	
	public Income updateIncome(Income income,int id)
	{
		Optional<Income> i=incomeRepository.findById(id);
		
		if(i.isPresent())
			return incomeRepository.save(income);
		else 
			return null;
		
	}
	public int getSum(Long uid)
	{
		User findById = userRepository.findByUid(uid);
		List<Income> e=findById.getIncomes();
		int sum=0;
		for(Income x:e)
		{
			sum+=x.getIncAmount();
		}
		return sum;
	}
	public List<Income> getIncomeByUid(Long uid)
	{
		User findById = userRepository.findByUid(uid);
		return findById.getIncomes();
	}
	
	public void deleteIncome(int id)
	{
		incomeRepository.deleteById(id);
	}
}
