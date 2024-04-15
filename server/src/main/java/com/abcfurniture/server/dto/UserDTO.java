package com.abcfurniture.server.dto;

import java.time.LocalDateTime;

public class UserDTO {
    private Integer userId;
    private String name;
    private String email;
    private String role;
    private LocalDateTime created_at;

    public UserDTO(Integer userId, String name, String email, String role, LocalDateTime created_at) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.role = role;
        this.created_at = created_at;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
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
}
