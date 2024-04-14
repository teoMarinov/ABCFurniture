package com.abcfurniture.server.controller;


import com.abcfurniture.server.dto.LoginDTO;
import com.abcfurniture.server.dto.LoginResponseDTO;
import com.abcfurniture.server.dto.RegisterDTO;
import com.abcfurniture.server.repository.UserRepository;
import com.abcfurniture.server.service.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public LoginResponseDTO registerUser( @Valid @RequestBody RegisterDTO body) {

        if (userRepository.findByEmail(body.getEmail()).isPresent()) {
            return new LoginResponseDTO("Email already in use");
        }

            authenticationService.registerUser(body.getName(), body.getEmail(), body.getPassword());


        return authenticationService.loginUser(body.getEmail(), body.getPassword());
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody LoginDTO body) {
        return authenticationService.loginUser(body.getEmail(), body.getPassword());
    }
}
