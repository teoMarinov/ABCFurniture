package com.abcfurniture.server.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    private String category;
    @Column(name = "sub_category")
    private String subCategory;

    private final LocalDateTime added_at = LocalDateTime.now();

    private float price;

    private int quantity;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private List<ProductImages> images = new ArrayList<ProductImages>();

    public Product() {
    }

    public Product(String name, String description, String category, String subCategory, float price, int quantity, List<ProductImages> images) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.subCategory = subCategory;
        this.price = price;
        this.quantity = quantity;
        this.images = images;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public LocalDateTime getAdded_at() {
        return added_at;
    }

    public float getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public List<ProductImages> getImages() {
        return images;
    }
}
