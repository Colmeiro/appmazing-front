import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})

export class ProductNewComponent implements OnInit{

  name!: string;
  stock!: string;
  price!: string;
  active!: string;
  dateAdded!: string;

  constructor(private productsService: ProductsService,
              private router: Router) {}

  ngOnInit() {
  }
  
  newProduct() {
    const product= {
      name:this.name,
      stock:this.stock,
      price:this.price,
      active:this.active,
      dateAdded:this.dateAdded
    };
    this.productsService.newProduct(product);
    this.navigateToHome();
  }

  navigateToHome() {
    this.router.navigate(['/products'])
  }
  
  cancelInsert() {
    this.navigateToHome();
  }
}
