import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentFormComponent} from './parent-form/parent-form.component';
import {SubFormAComponent} from './parent-form/sub-form-a/sub-form-a.component';
import {SubFormBComponent} from './parent-form/sub-form-b/sub-form-b.component';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./parent-form/parent-form.module').then(mod => mod.ParentFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
