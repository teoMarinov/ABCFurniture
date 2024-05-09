package com.abcfurniture.server.service;


import com.abcfurniture.server.dto.CategoryDescriptionDTO;
import com.abcfurniture.server.model.CategoryDescription;
import com.abcfurniture.server.model.SubCategoryDescription;
import com.abcfurniture.server.repository.CategoryDescriptionRepository;
import com.abcfurniture.server.repository.SubCategoryDesciptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryDescriptionService {

    @Autowired
    private CategoryDescriptionRepository categoryDescriptionRepository;

    @Autowired
    SubCategoryDesciptionRepository subCategoryDesciptionRepository;

    public List<CategoryDescriptionDTO> getMain(){
        return categoryDescriptionRepository.findAllWithoutConnections();
    }

    public List<SubCategoryDescription> getSub(){
        return subCategoryDesciptionRepository.findAll();
    }

    public Optional<CategoryDescription> getCategoryByName(String name) {
        return categoryDescriptionRepository.findByCategoryName(name);
    }

    public CategoryDescription editCategory(CategoryDescription update) {
        final String categoryName = update.getCategoryName();

        return categoryDescriptionRepository.findByCategoryName(categoryName)
                .map(category -> {
                    category.setDescription(update.getDescription());
                    category.setImage(update.getImage());
                    return categoryDescriptionRepository.save(category);
                })
                .orElseThrow(() -> new RuntimeException("Category with name '" + categoryName + "' not found"));
    }

}
