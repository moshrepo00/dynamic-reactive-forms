import { Injectable } from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ParentFormService {

  profileForm = this.fb.group({
    numberOfPeople: [''],
    firstName: [''],
    lastName: [''],
    people: new FormArray([
      this.fb.group({
        firstName: [''],
        lastName: ['']
      })
    ])
  });

  constructor(private fb: FormBuilder) {

  }
}
