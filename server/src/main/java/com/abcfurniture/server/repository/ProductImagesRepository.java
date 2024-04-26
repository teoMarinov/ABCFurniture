package com.abcfurniture.server.repository;

import com.abcfurniture.server.model.ProductImages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductImagesRepository extends JpaRepository<ProductImages, Integer> {
}
