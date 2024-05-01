package com.abcfurniture.server.model;


import jakarta.persistence.*;

@Entity
@Table(name = "product-images")
public class ProductImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String url;
    

    public ProductImages() {
    }

    public ProductImages( String url) {
        this.url = url;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
