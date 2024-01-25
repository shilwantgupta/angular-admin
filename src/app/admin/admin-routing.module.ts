import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard', component: DashboardComponent},
      {path:'categories',component: CategoryComponent},
      {path:'add-category',component: AddCategoryComponent},
      {path:'edit-category/:id',component: EditCategoryComponent},
      {path:'products',component: ProductsComponent},
      {path:'add-product',component: AddProductComponent},
      {path:'edit-product/:id',component: EditProductComponent},
      {path:'profile',component:ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
