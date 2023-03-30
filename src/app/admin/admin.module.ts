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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AdminComponent,
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
  ],
})
export class AdminModule { }
