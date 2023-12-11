import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './admin/user/user.component';

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('./admin/sidebar/sidebar.module').then(m => m.SidebarModule)
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
