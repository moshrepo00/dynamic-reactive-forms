import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentFormRoutingModule } from './parent-form-routing.module';
import { SubFormAComponent } from './sub-form-a/sub-form-a.component';
import { SubFormBComponent } from './sub-form-b/sub-form-b.component';
import {ParentFormComponent} from './parent-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ParentFormComponent, SubFormAComponent, SubFormBComponent],
  imports: [
    CommonModule,
    ParentFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParentFormModule { }
