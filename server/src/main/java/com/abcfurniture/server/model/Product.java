package com.abcfurniture.server.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
public class Product {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer id;
    private String name;

    private String description;

    private String category;

    private String sub_category;


    private final LocalDateTime added_at = LocalDateTime.now();

    private float price;

    private int quantity;


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private List<ProductImages> images = new ArrayList<ProductImages>();

    public Product() {
    }

    public Product(String name, String description, String category, String sub_category, float price, int quantity, List<ProductImages> images) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.sub_category = sub_category;
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

    public String getSub_category() {
        return sub_category;
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
