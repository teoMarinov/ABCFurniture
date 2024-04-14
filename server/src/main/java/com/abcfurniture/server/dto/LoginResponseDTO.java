package com.abcfurniture.server.dto;

import com.abcfurniture.server.model.ApplicationUser;

public class LoginResponseDTO {

    private Integer userId;
    private String name;
    private String email;
    private String role;
    private String jwt;
    private String success;
    private String error;


    public LoginResponseDTO() {
        super();
    }

    public LoginResponseDTO(Integer userId, String name, String email, String role, String jwt, String success) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.role = role;
        this.jwt = jwt;
        this.success = success;
    }

    public LoginResponseDTO(String error) {
        this.error = error;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getSuccess() {
        return success;
    }

    public void setSuccess(String success) {
        this.success = success;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
