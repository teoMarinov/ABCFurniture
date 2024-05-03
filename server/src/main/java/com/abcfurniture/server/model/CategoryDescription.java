package com.abcfurniture.server.model;


import jakarta.persistence.*;
import org.hibernate.validator.constraints.UniqueElements;

import java.util.ArrayList;
import java.util.List;

@Entity
public class CategoryDescription {

    @Id
    @UniqueElements
    private Integer id;
    @UniqueElements
    private String category_name;
    private String image;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(cascade =  CascadeType.ALL)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private List<SubCategoryDescription> subcategories = new ArrayList<SubCategoryDescription>();

    public CategoryDescription() {
    }

    public CategoryDescription(String category_name, String image, String description, List<SubCategoryDescription> subcategories) {
        this.category_name = category_name;
        this.image = image;
        this.description = description;
        this.subcategories = subcategories;
    }

    public List<SubCategoryDescription> getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(List<SubCategoryDescription> subcategories) {
        this.subcategories = subcategories;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}
