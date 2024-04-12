import { Component,Inject, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit{

  productId!: number;

  constructor(private productsService: ProductsService,
              public dialogRef: MatDialogRef<ProductDeleteComponent>,
              @Inject(MAT_DIALOG_DATA)public data: { productId: number},
              private router: Router) {
                this.productId = data.productId
              }


  ngOnInit() {
  }

  confirm(): void {
    this.productsService.deleteProduct(this.productId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/products']);
  }
}
