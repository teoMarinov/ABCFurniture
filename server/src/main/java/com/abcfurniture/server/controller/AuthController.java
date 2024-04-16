package com.abcfurniture.server.controller;


import com.abcfurniture.server.dto.LoginDTO;
import com.abcfurniture.server.dto.LoginResponseDTO;
import com.abcfurniture.server.dto.RegisterDTO;
import com.abcfurniture.server.repository.UserRepository;
import com.abcfurniture.server.service.AuthenticationService;
import com.abcfurniture.server.service.TokenBlacklistService;
import jakarta.servlet.http.HttpServletRequest;
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

    @Autowired
    private TokenBlacklistService blacklistService;

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

    @GetMapping("/jwtLogin")
    public LoginResponseDTO autoLoginUser(@RequestHeader("Authorization") String authorizationHeader) {
        String jwtToken = null;
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwtToken = authorizationHeader.substring(7);
        }

        if (jwtToken != null) {
            return authenticationService.tokenLogin(jwtToken);
        } else {
            return new LoginResponseDTO("Something went wrong AuthController autoLoginUser");
        }
    }

    @GetMapping("/deleteToken")
    public String deleteToken(@RequestHeader("Authorization") String authorizationHeader){
        String jwtToken = null;
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwtToken = authorizationHeader.substring(7);
        }
        if (jwtToken != null) {
            blacklistService.addToBlacklist(jwtToken);
            return "Token removed";
        } else {
            return "Something went wrong AuthController autoLoginUser";
        }

    }
}
