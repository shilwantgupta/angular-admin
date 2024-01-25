import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryComponent } from './category/category/category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductsComponent } from './product/products/products.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AdminComponent,
    ProfileComponent,
    AddCategoryComponent,
    CategoryComponent,
    EditCategoryComponent,
    AddProductComponent,
    ProductsComponent,
    EditProductComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ],

})
export class AdminModule { }
