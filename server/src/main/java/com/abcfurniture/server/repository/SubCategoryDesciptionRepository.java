package com.abcfurniture.server.repository;

import com.abcfurniture.server.model.SubCategoryDescription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SubCategoryDesciptionRepository extends JpaRepository<SubCategoryDescription, Integer> {
    Optional<SubCategoryDescription> findBySubcategoryName(String subcategoryName);
}
