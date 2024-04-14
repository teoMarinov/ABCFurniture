package com.abcfurniture.server.validation;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ValidationHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ValidationErrorModel handleValidationError(MethodArgumentNotValidException e) {
//        Map<String, String> errors = new HashMap<>();
//        List<ObjectError> allErrors = e.getBindingResult().getAllErrors();
//        allErrors.forEach(err -> {
//            FieldError fe = (FieldError) err;
//            errors.put(fe.getField(), fe.getDefaultMessage());
//        });
        return new ValidationErrorModel("Please enter valid information");
    }
}
