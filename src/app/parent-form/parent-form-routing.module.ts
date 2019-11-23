import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubFormAComponent} from './sub-form-a/sub-form-a.component';
import {SubFormBComponent} from './sub-form-b/sub-form-b.component';
import {ParentFormComponent} from './parent-form.component';

const routes: Routes = [
  {
    path: '',
    component: ParentFormComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'primary'
      },
      {
        path: 'primary',
        component: SubFormAComponent
      },
      {
        path: 'secondary',
        component: SubFormBComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentFormRoutingModule { }
