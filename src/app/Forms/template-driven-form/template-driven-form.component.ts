import { Component, OnInit,NgModule } from '@angular/core';
import { FormExampleClass } from 'src/app/form-example-class';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  branches = ['CS', 'EC',
  'Mech', 'Civil'];
  model = new FormExampleClass(18, 'Sandeep', this.branches[0], 'Bangalore');
  submitted = false;
  public startAt = new Date(2018, 3, 10, 10, 30, 30);
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
  }
    get diagnostic() { return JSON.stringify(this.model); }
}
