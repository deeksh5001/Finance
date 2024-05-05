package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info = @Info(
				title = "Personal Finance Manager",
				version = "1.1.1",
				description = "Manage your expenses effectively with finmate!",
				contact = @Contact(
						name = "Deeksha",
						email = "727821tucs033@skct.edu.in"
						)
				)
		)
@EnableFeignClients
@SpringBootApplication
public class FinanceManager1Application {

	public static void main(String[] args) {
		SpringApplication.run(FinanceManager1Application.class, args);
	}

}
