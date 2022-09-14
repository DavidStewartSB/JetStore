import { ProductsService } from './../../../util/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = []

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this._getProducts()
  }
  
  _getProducts(){
    this.productService.getProducts().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
