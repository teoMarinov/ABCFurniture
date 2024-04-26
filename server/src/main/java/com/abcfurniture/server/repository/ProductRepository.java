package com.abcfurniture.server.repository;

import com.abcfurniture.server.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
