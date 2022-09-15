import { ProductsService } from './../../../util/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/util/services/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form: any = FormGroup
  header: string = ''
  copyButton = ''
  trigger = false
  editmode = false
  currentProductId: string = ''
  categories: any = [];
  imageDisplay: string | ArrayBuffer = ''

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoryService
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode(); 
  }

  onSubmit(): void{
    this.trigger = true
    if(this.form.invalid) return
    const productFormData = new FormData()
    Object.keys(this.productForm).map((key) => {
      productFormData.append(key, this.productForm[key].value)
    })
    if(this.editmode){
      return this._updateProduct(productFormData)
    } else {
      return this._addProduct(productFormData)
    }
  }
  onCancel(): void{
    this.router.navigateByUrl(`produtos`)
  }
  get productForm(){
    return this.form.controls
  }
  //HTTP Request
  private _getCategories() {
    this.categoriesService.getCategories().subscribe(resCategories => {
      this.categories = resCategories
    })
  }
  private _addProduct(productData: FormData){
    this.productsService.createProduct(productData).subscribe({
      next: () => alert('sucesso'),//this.alertService.successSwal('Produto atualizado com sucesso', 'sucesso')
      error: () => alert('error'), //this.alertService.errorSwal('Erro ao editar Produto', 'Verifique os campos')
      complete: () => this.location.back() 
    })
  }
  private _updateProduct(productFormData: FormData) {
    this.productsService.updateProduct(productFormData, this.currentProductId).subscribe({
      next: () => alert('sucesso'),//this.alertService.successSwal('Produto atualizado com sucesso', 'sucesso')
      error: () => alert('error'), //this.alertService.errorSwal('Erro ao editar Produto', 'Verifique os campos')
      complete: () => this.location.back() 
    })
  }
  private _checkEditMode() {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.editmode = true
        this.currentProductId = params['id']
        this.header = 'Edite o Produto'
        this.copyButton = 'Atualizar'
        this.productsService.getProduct(params['id']).subscribe(product => {
          const form = this.productForm
          form.name.setValue(product.name)
          form.status.setValue(product.status)
          form.countInStock.setValue(product.countInStock)
          form.price.setValue(product.price)
          form.promoPrice.setValue(product.promo)
          form.description.setValue(product.description)
          form.imgPrimary.setValue(product.image)
          form.imgSecondary.setValue(product.images)
        })
      }
    })
  }
  //Auto completa os inputs ao clicar em "editar"
  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      status: [true, Validators.required],
      countInStock: [ Validators.required],
      price: [ Validators.required],
      promoPrice: [ Validators.required],
      description: ['', Validators.required],
      imgPrimary: ['', Validators.required],
      imgSecondary: ['']
    })
  }
}
