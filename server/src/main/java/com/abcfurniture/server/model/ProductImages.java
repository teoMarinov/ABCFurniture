package com.abcfurniture.server.model;


import jakarta.persistence.*;

@Entity
@Table(name = "product-images")
public class ProductImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String image;

//    @ManyToOne(fetch =  FetchType.LAZY)
//    @JoinColumn(name = "product_id")
//    private Product product;

    public ProductImages() {
    }

    public ProductImages( String image
//            , Product product
    ) {
        this.image = image;
//        this.product = product;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

//    public Product getProduct() {
//        return product;
//    }
//
//    public void setProduct(Product product) {
//        this.product = product;
//    }
}
