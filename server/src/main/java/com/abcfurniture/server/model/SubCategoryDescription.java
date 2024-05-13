package com.abcfurniture.server.model;


import jakarta.persistence.*;
import org.hibernate.validator.constraints.UniqueElements;

@Entity
public class SubCategoryDescription {

    @Id
    @UniqueElements
    private Integer id;

    @UniqueElements
    @Column(name = "subcategory_name")
    private String subcategoryName;
    private String image;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    public SubCategoryDescription() {
    }

    public SubCategoryDescription(String subcategoryName, String image, String description) {
        this.subcategoryName = subcategoryName;
        this.image = image;
        this.description = description;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
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
