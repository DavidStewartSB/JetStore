import { ProductsService } from './../../../util/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = []

  constructor(
    private router: Router,
    private productService: ProductsService
    ) { }

  ngOnInit(): void {
    this._getProducts()
  }
  
  _getProducts(){
    this.productService.getProducts().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
  updateProduct(productId: string){
    this.router.navigateByUrl(`produtos/formulario/${productId}`)
  }
}
