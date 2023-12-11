import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      {
        path: 'utilisateurs', component: UserComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
