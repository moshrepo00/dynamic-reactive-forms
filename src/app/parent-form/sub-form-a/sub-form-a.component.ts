import { Component, OnInit } from '@angular/core';
import {ParentFormService} from '../parent-form.service';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sub-form-a',
  templateUrl: './sub-form-a.component.html',
  styleUrls: ['./sub-form-a.component.scss']
})
export class SubFormAComponent implements OnInit {

  get f() { return this.formService.profileForm.controls; }
  get t() { return this.f.people as FormArray; }

  constructor(public formService: ParentFormService, private fb: FormBuilder) { }

  addPeople() {
    this.t.push(this.fb.group({
      firstName: [''],
      lastName: ['']
    }));
  }

  getValues() {
    console.log(this.formService.profileForm.get('people').value);
  }

  patchValue(index) {
    this.t.at(index).patchValue({
      firstName: 'test',
      lastName: 'test'
    });
  }

  delete(index) {
    console.log(index);
    this.t.removeAt(index);
  }

  ngOnInit() {
    this.formService.profileForm.valueChanges.subscribe(val => {
      console.log(val.people);
    });
  }

}
