package com.abcfurniture.server.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import org.hibernate.validator.constraints.UniqueElements;

@Entity
public class SubCategoryDescription {

    @Id
    @UniqueElements
    private String subcategory_name;
    private String image;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    public SubCategoryDescription() {
    }

    public SubCategoryDescription(String subcategory_name, String image, String description) {
        this.subcategory_name = subcategory_name;
        this.image = image;
        this.description = description;
    }

    public String getSubcategory_name() {
        return subcategory_name;
    }

    public void setSubcategory_name(String subcategory_name) {
        this.subcategory_name = subcategory_name;
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
