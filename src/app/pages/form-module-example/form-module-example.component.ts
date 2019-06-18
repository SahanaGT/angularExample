import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , FormArray , FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-form-module-example',
  templateUrl: './form-module-example.component.html',
  styleUrls: ['./form-module-example.component.scss']
})
export class FormModuleExampleComponent implements OnInit {
  exampleForm: FormGroup;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  ngOnInit() {
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
