import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit{
  products: any = [];
  constructor(private productsService: ProductsService,
              private router: Router
  ) {}

  ngOnInit() {
      this.productsService.getProducts().subscribe(data=> {
        this.products = data;
      })
  }

  openDetailForm(row: any) {
    this.router.navigate(['/product', row.id])
  }

}
