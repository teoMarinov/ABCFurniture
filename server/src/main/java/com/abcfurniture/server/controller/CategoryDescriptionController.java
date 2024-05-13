package com.abcfurniture.server.controller;


import com.abcfurniture.server.dto.CategoryDescriptionDTO;
import com.abcfurniture.server.model.CategoryDescription;
import com.abcfurniture.server.model.SubCategoryDescription;
import com.abcfurniture.server.service.CategoryDescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryDescriptionController {

    @Autowired
    private CategoryDescriptionService categoryDescriptionService;



    @GetMapping("/main")
    public List<CategoryDescriptionDTO> getInfoMain () {
        return categoryDescriptionService.getMain();
    }

    @GetMapping("/sub")
    public List<SubCategoryDescription> getInfoSub () {
        return categoryDescriptionService.getSub();
    }

    @GetMapping("/{category_name}")
    public Optional<CategoryDescription> getCategoryByName(@PathVariable("category_name") String name) {
        return categoryDescriptionService.getCategoryByName(name);
    }

    @GetMapping("/sub/{subcategory_name}")
    public Optional<SubCategoryDescription> getSubcategoryByBane(@PathVariable("subcategory_name") String name) {
        return categoryDescriptionService.getSubcategoryByName(name);
    }

    @PutMapping("/{category_name}")
    public CategoryDescription editCategoryInfo(@PathVariable("category_name") String name, @RequestBody CategoryDescription data) {
        return categoryDescriptionService.editCategory(name, data);
    }

    @PutMapping("/sub/{subcategory_name}")
    public SubCategoryDescription editSubategoryInfo(@PathVariable("subcategory_name") String name, @RequestBody CategoryDescription data) {
        return categoryDescriptionService.editSubcategory(name, data);
    }

}
