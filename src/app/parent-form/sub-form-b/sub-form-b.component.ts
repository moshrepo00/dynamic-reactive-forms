import { Component, OnInit } from '@angular/core';
import {ParentFormService} from '../parent-form.service';

@Component({
  selector: 'app-sub-form-b',
  templateUrl: './sub-form-b.component.html',
  styleUrls: ['./sub-form-b.component.scss']
})
export class SubFormBComponent implements OnInit {

  constructor(public formService: ParentFormService) { }

  ngOnInit() {
  }

}
