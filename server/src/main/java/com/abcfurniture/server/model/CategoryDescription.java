package com.abcfurniture.server.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import org.hibernate.validator.constraints.UniqueElements;

@Entity
public class CategoryDescription {

    @Id
    @UniqueElements
    private String category_name;
    private String image;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    public CategoryDescription() {
    }

    public CategoryDescription(String category_name, String image, String description) {
        this.category_name = category_name;
        this.image = image;
        this.description = description;
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
