package com.abcfurniture.server.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class RegistrationDTO {

    @NotNull(message = "Username can't be null")
    @NotBlank(message = "Username can't be blank")
    @Size(min = 3, message = "MIN USER IS 3 AND MAX IS 6", max = 6)
    private String username;

    @NotNull(message = "Password can't be null")
    @NotBlank(message = "Password can't be blank")
    private String password;

    public RegistrationDTO() {

    }

    public RegistrationDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}


