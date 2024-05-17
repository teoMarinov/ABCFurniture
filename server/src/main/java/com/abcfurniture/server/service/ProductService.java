package com.abcfurniture.server.service;

import com.abcfurniture.server.model.Product;
import com.abcfurniture.server.repository.ProductImagesRepository;
import com.abcfurniture.server.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductImagesRepository productImagesRepository;

    public Product addNewProduct (Product data) {
       return productRepository.save(data);
    }

    public List<Product> getAllProducts () {
        return productRepository.findAll();
    }

    public Optional<List<Product>> getAllInSubCategory (String sub_category,String sort_method, String quantity) {
        return productRepository.findAllBySubCategory(sub_category);
    }


}
