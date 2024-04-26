package com.abcfurniture.server.controller;

import com.abcfurniture.server.model.Product;
import com.abcfurniture.server.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/new")
    public Product oneToMany (@RequestBody Product data) {

        return productService.addNewProduct(data);
    }

    @GetMapping("/all")
    public List<Product> getAll () {
        return productService.getAllProducts();
    }
}
