package com.abcfurniture.server.controller;


import com.abcfurniture.server.model.CategoryDescription;
import com.abcfurniture.server.model.SubCategoryDescription;
import com.abcfurniture.server.service.CategoryDescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryDescriptionController {

    @Autowired
    private CategoryDescriptionService categoryDescriptionService;



    @GetMapping("/main")
    public List<CategoryDescription> getInfoMain () {
        return categoryDescriptionService.getMain();
    }

    @GetMapping("/sub")
    public List<SubCategoryDescription> getInfoSub () {
        return categoryDescriptionService.getSub();
    }

}
