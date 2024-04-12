package com.abcfurniture.server.controller;


import com.abcfurniture.server.dto.LoginResponseDTO;
import com.abcfurniture.server.dto.RegistrationDTO;
import com.abcfurniture.server.model.ApplicationUser;
import com.abcfurniture.server.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public LoginResponseDTO registerUser(@RequestBody RegistrationDTO body) {

        authenticationService.registerUser(body.getUsername(), body.getPassword());
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) {
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }
}
