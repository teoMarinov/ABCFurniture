package com.abcfurniture.server.repository;

import com.abcfurniture.server.model.CategoryDescription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDescriptionRepository extends JpaRepository<CategoryDescription, Integer> {
}
