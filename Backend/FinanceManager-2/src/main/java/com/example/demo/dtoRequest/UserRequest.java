package com.example.demo.dtoRequest;

import com.example.demo.role.Role;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
	  private String name;
	    private String email;
	    private String password;
	    private Boolean isEnabled;
	    private Role role;
}
