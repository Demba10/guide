import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserComponent } from '../user/user.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule
  ]
})
export class SidebarModule { }
