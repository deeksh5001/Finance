package com.example.demo.model;

import java.sql.Date;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="expense")
public class Expense 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int expId;
	private Date date;
	private int expAmount;
	private String category;
	


	
}
