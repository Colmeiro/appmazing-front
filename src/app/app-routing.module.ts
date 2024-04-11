import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  {path: 'contacts' , component: ContactHomeComponent },
  {path: 'products' , component: ProductHomeComponent },
  {path: 'contact/:id' , component: ContactDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
