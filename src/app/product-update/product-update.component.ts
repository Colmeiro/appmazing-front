import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})

export class ProductUpdateComponent implements OnInit {

  product: any;

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit() {
      this.product = this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(data=> {
        this.product = data;
      })
    }

    updateProduct(): void {
      this.productsService.updateProduct(this.product);
      this.navigateToDetail()    
    }

    cancelChanges() {
      this.navigateToDetail()
    }
    
    navigateToDetail() {
      this.router.navigate(['/product', this.route.snapshot.params['id']]);
    }
}
