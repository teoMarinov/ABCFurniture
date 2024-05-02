package com.abcfurniture.server.service;


import com.abcfurniture.server.model.CategoryDescription;
import com.abcfurniture.server.model.SubCategoryDescription;
import com.abcfurniture.server.repository.CategoryDescriptionRepository;
import com.abcfurniture.server.repository.SubCategoryDesciptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryDescriptionService {

    @Autowired
    private CategoryDescriptionRepository categoryDescriptionRepository;

    @Autowired
    SubCategoryDesciptionRepository subCategoryDesciptionRepository;

    public List<CategoryDescription> getMain(){
        return categoryDescriptionRepository.findAll();
    }

    public List<SubCategoryDescription> getSub(){
        return subCategoryDesciptionRepository.findAll();
    }
}
