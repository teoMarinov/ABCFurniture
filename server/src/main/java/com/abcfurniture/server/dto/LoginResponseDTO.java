package com.abcfurniture.server.dto;

import com.abcfurniture.server.model.ApplicationUser;

import java.time.LocalDateTime;

public class LoginResponseDTO {

    private Integer userId;
    private String name;
    private String email;
    private String role;
    private String jwt;
    private String success;
    private String error;

    private LocalDateTime created_at;


    public LoginResponseDTO() {
        super();
    }

    public LoginResponseDTO(Integer userId, String name, String email, String role, String jwt, String success, LocalDateTime created_at) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.role = role;
        this.jwt = jwt;
        this.success = success;
        this.created_at = created_at;
    }

    public LoginResponseDTO(String error) {
        this.error = error;
    }

    public Integer getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getRole() {
        return role;
    }

    public String getJwt() {
        return jwt;
    }

    public String getSuccess() {
        return success;
    }

    public String getError() {
        return error;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }
}
