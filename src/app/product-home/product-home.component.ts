import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit{
  products: any = [];
  constructor(private productsService: ProductsService,
              private router: Router,
              public dialog: MatDialog
  ) {}

  ngOnInit() {
      this.productsService.getProducts().subscribe(data=> {
        this.products = data;
      })
  }

  openDetailForm(row: any) {
    this.router.navigate(['/product', row.id])
  }

  openDeleteDialog(productId: number): void{
    const dialogRef = this.dialog.open(ProductDeleteComponent, { data: { productId: productId } });
  }

}
