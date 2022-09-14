import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    apiURLProducts = 'http://localhost:3000/api/v1/products'
    constructor(private http: HttpClient){}

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.apiURLProducts)
    }
}