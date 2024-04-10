import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit{
  products: any = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
      this.productsService.getProducts().subscribe(data=> {
        this.products = data;
      })
  }

}
