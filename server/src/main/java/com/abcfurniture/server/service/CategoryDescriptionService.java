package com.abcfurniture.server.service;


import com.abcfurniture.server.repository.CategoryDescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryDescriptionService {

    @Autowired
    private CategoryDescriptionRepository categoryDescriptionRepository;

    public void changeCategoryDescription(){

    }
}
