package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.Api;
import com.example.demo.dtoRequest.UserRequest;
import com.example.demo.dtoResponse.UserResponse;
import com.example.demo.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@Tag(name="User Details")
@RequiredArgsConstructor
@RequestMapping(Api.USER)
@CrossOrigin
public class UserController 
{

	private final UserService userService;
	
	
	@GetMapping("/getAll")
	public ResponseEntity<List<UserResponse>> getAllUsers() {
        List<UserResponse> userList = userService.getAllUsers();
        return !userList.isEmpty() ? ResponseEntity.ok().body(userList) : ResponseEntity.noContent().build();
    }
	
	
	@GetMapping("/getById/{id}")
	 public ResponseEntity<UserRequest> getUser(@PathVariable Long id) {
        UserRequest userResponse = userService.getUser(id);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }
	
	@PutMapping("/update/{userid}")
    public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest request, @PathVariable Long userid) {
        UserResponse userResponse = userService.updateUser(request, userid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String>  deleteUser(@PathVariable Long id)
	{
		boolean isDeleted=userService.deleteUser(id);
		return isDeleted ? ResponseEntity.ok().body("User deleted successfully!")
                : ResponseEntity.notFound().build();
	}
}
