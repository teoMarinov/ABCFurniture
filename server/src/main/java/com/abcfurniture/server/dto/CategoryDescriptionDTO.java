package com.abcfurniture.server.dto;

public class CategoryDescriptionDTO {
    private Integer id;
    private String categoryName;
    private String image;
    private String description;

    public CategoryDescriptionDTO(Integer id, String categoryName, String image, String description) {
        this.id = id;
        this.categoryName = categoryName;
        this.image = image;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public String getImage() {
        return image;
    }

    public String getDescription() {
        return description;
    }
}
