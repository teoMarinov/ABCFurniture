package com.abcfurniture.server.controller;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")

public class TestController {


    @GetMapping("/test/customer")
    public String customerTest () {
        return "Hello from customer";
    }

    @GetMapping("/test/employee")
    public String employeeTest () {
        return "Employee here";
    }

    @GetMapping("/test/all")
    public String allTest () {
        return "EVERYONE AAAAAA";
    }

}
