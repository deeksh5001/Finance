package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dtoRequest.UserRequest;
import com.example.demo.dtoResponse.UserResponse;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.role.Role;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class UserService 
{
	@Autowired
	UserRepository userRepository; 
	
    private final PasswordEncoder passwordEncoder;
	
	public List<UserResponse> getAllUsers()
	{
		List<User> userList = userRepository.findAll();
        return userList.stream()
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
	}
	
	public UserResponse updateUser(UserRequest request, Long user_id) {
	        User user = userRepository.findByUid(user_id);
	        User newUser = new User();
	        if (user != null) {
	            newUser = User.builder()
	            		.uid(user_id)
	                    .name(request.getName())
	                    .email(request.getEmail())
	                    .password(passwordEncoder.encode(request.getPassword()))
	                    .role(request.getRole())
	                    .isEnabled(request.getIsEnabled())
	                    .build();
	            userRepository.save(newUser);
	        }
	        return mapUserToUserResponse(newUser);
	    }
	
	
	
	
	public UserRequest getUser(Long user_id)
	{
		 User user = userRepository.findByUid(user_id);
	        return mapUserToUserRequest(user);
	}
	
	public boolean deleteUser(Long id)
	{
		userRepository.deleteById(id);
		return true;
	}
	
	private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
        		.uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .build();
    }
	private UserRequest mapUserToUserRequest(User user) {
        return UserRequest.builder()
                .name(user.getName())
                .email(user.getEmail())
                .password(user.getPassword())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .build();
    }
}
