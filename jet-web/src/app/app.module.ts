import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
//Components
import { AppComponent } from './app.component'
import { ListStoreComponent } from './pages/store/list-store/list-store.component'
import { DetailsStoreComponent } from './pages/store/details-store/details-store.component'
import { ProductListComponent } from './pages/admin/product-list/product-list.component'
import { ProductFormComponent } from './pages/admin/product-form/product-form.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
const SHARED_COMPONENTS = [ListStoreComponent,DetailsStoreComponent,
ProductListComponent,ProductFormComponent,HeaderComponent, FooterComponent]
//Services
import { CategoryService } from './util/services/category.service'
import { ProductsService } from './util/services/product.service'
//Styles libs


@NgModule({
  declarations: [
    AppComponent,
    ...SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CategoryService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
