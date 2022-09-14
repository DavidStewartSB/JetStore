import { ProductsService } from './../../../util/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/util/models/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form: any = FormGroup
  header: string = ''
  copyButton: string = ''
  checked = false;
  editMode = false
  currentProductId = ''
  categories: any = []
  imageDisplay: string | ArrayBuffer = ''
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: Category
  ) { }

  ngOnInit(): void {
    /* this._initForm();
    this._getCategories();
    this._checkEditMode(); */
  }

  onSubmit(): void{

  }
  onCancle() {
    this.router.navigateByUrl('produtos')
  }

}
