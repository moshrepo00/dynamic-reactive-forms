import { Component, OnInit } from '@angular/core';
import {ParentFormService} from '../parent-form.service';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sub-form-a',
  templateUrl: './sub-form-a.component.html',
  styleUrls: ['./sub-form-a.component.scss']
})
export class SubFormAComponent implements OnInit {

  options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  get f() { return this.formService.profileForm.controls; }
  get t() { return this.f.people as FormArray; }

  onChangePeople(e) {
    const numberOfPeople = e.target.value || 0;
    if (this.t.length < numberOfPeople) {
      for (let i = this.t.length; i < numberOfPeople; i++) {
        this.t.push(this.fb.group({
          firstName: [''],
          lastName: ['']
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfPeople; i--) {
        this.t.removeAt(i);
      }
    }
  }

  constructor(public formService: ParentFormService, private fb: FormBuilder) { }

  getValues() {
    console.log(this.formService.profileForm.get('numberOfPeople').value);
  }
  addPeople() {
    this.t.push(this.fb.group({
      firstName: [''],
      lastName: ['']
    }));
  }

  delete(index) {
    this.t.removeAt(index);
  }

  ngOnInit() {
    this.formService.profileForm.valueChanges.subscribe(val => {
      console.log(val.people);
    });
    
  }

}
