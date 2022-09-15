import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { DetailsStoreComponent } from './pages/store/details-store/details-store.component';
import { NgModule } from '@angular/core';
import { ListStoreComponent } from './pages/store/list-store/list-store.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListStoreComponent
  },
  {
    path: 'lista-produtos',
    component: ListStoreComponent
  },
  {
    path: 'detalhes/:id',
    component: DetailsStoreComponent
  },
  {
    path: 'produtos',
    component: ProductListComponent
  },
  {
    path: 'produtos/formulario',
    component: ProductFormComponent
  },
  {
    path: 'produtos/formulario/:id',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
