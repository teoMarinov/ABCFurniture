package com.abcfurniture.server.dto;

import com.abcfurniture.server.model.ApplicationUser;

import java.time.LocalDateTime;

public class LoginResponseDTO {

   private UserDTO user;
    private String jwt;
    private String success;
    private String error;



    public LoginResponseDTO() {
        super();
    }

    public LoginResponseDTO(UserDTO user , String jwt, String success) {
        this.user = user;
        this.jwt = jwt;
        this.success = success;
    }

    public LoginResponseDTO(String error) {
        this.error = error;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public String getJwt() {
        return this.jwt;
    }

    public String getSuccess() {
        return this.success;
    }

    public String getError() {
        return this.error;
    }

}
