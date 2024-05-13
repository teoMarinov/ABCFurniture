package com.abcfurniture.server.repository;

import com.abcfurniture.server.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    Optional<List<Product>> findAllBySubCategory(String sub_category_name);
}
