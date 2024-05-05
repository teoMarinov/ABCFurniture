package com.abcfurniture.server.repository;

import com.abcfurniture.server.model.CategoryDescription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryDescriptionRepository extends JpaRepository<CategoryDescription, Integer> {
    Optional<CategoryDescription> findByCategoryName(String categoryName);
}
