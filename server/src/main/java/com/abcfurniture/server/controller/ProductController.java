package com.abcfurniture.server.controller;

import com.abcfurniture.server.model.Product;
import com.abcfurniture.server.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/{sub_category}")
    public Optional<List<Product>> getBySubCategory(@PathVariable("sub_category") String name){
        System.out.println("name");
        return productService.getAllInSubCategory(name);
    }
}
