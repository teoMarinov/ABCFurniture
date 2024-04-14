package com.abcfurniture.server.validation;

public class ValidationErrorModel {
    private String error;

    public ValidationErrorModel(String error) {
        this.error = error;
    }

    public String getError() {
        return error;
    }
}
