import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  product: any;

  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.product = this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data=> {
      this.product = data;
    })
  }

  editProduct() {
    this.router.navigate(['/product/edit', this.route.snapshot.params['id']]);
  }
  
  closeProduct() {
    this.router.navigate(['/products']);
   }


}
