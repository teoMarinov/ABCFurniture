package com.abcfurniture.server.service;


import com.abcfurniture.server.dto.LoginResponseDTO;
import com.abcfurniture.server.dto.UserDTO;
import com.abcfurniture.server.model.ApplicationUser;

import com.abcfurniture.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;



    public void registerUser(String name, String email, String password) {
        String encodedPassword = passwordEncoder.encode(password);
        userRepository.save(new ApplicationUser(name, email, encodedPassword));
    }

    public LoginResponseDTO loginUser(String email, String password) {
        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );

            ApplicationUser userReq = userRepository.findByEmail(email).orElseThrow();

            String token = tokenService.generateToken(userReq);

            Optional<ApplicationUser> userOptional = userRepository.findByEmail(email);


            return userOptional.map(user -> {

            UserDTO userInfo = new UserDTO(
                    user.getUserId(),
                    user.getName(),
                    user.getEmail(),
                    user.getRole(),
                    user.getCreated_at()
            );

                return new LoginResponseDTO(
                        userInfo,
                        token,
                        "Logging In"
                );

            }).orElse(new LoginResponseDTO("Something went wrong with authService.login()"));

        } catch (AuthenticationException e) {
            return new LoginResponseDTO("Email and password don't match");
        }
    }

    public LoginResponseDTO tokenLogin(String token) {
               String userEmail = tokenService.getEmailByToken(token);
               ApplicationUser user = userRepository.findByEmail(userEmail).orElseThrow();
               boolean tokenIsValid = tokenService.isTokenValid(token, user);
               String updatedToken = tokenService.generateToken(user);
               if (tokenIsValid) {
                   UserDTO userInfo = new UserDTO(
                           user.getUserId(),
                           user.getName(),
                           user.getEmail(),
                           user.getRole(),
                           user.getCreated_at()
                   );
                   return new LoginResponseDTO(
                           userInfo,
                           updatedToken,
                           "Logging In"
                   );
               } else {
                   return new LoginResponseDTO("Invalid token");
               }

    }

}
