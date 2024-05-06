package com.abcfurniture.server.repository;

import com.abcfurniture.server.dto.CategoryDescriptionDTO;
import com.abcfurniture.server.model.CategoryDescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CategoryDescriptionRepository extends JpaRepository<CategoryDescription, Integer> {

    @Query("SELECT new com.abcfurniture.server.dto.CategoryDescriptionDTO(cd.id, cd.categoryName, cd.image, cd.description) FROM CategoryDescription cd")
    List<CategoryDescriptionDTO> findAllWithoutConnections();
    Optional<CategoryDescription> findByCategoryName(String categoryName);
}
