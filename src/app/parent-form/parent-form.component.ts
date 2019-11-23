import { Component, OnInit } from '@angular/core';
import {ParentFormService} from './parent-form.service';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  constructor(public formService: ParentFormService) { }

  ngOnInit() {
  }

}
