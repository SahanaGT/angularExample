import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , FormArray , FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-form-module-example',
  templateUrl: './form-module-example.component.html',
  styleUrls: ['./form-module-example.component.scss']
})
export class FormModuleExampleComponent implements OnInit {
  exampleForm: FormGroup;
  items: FormArray;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    clgName : new FormControl(''),
    items: this.fb.array([ this.createItem() ])
  });
  ngOnInit() {
  }
  constructor(private fb: FormBuilder) {}
  createItem(): FormGroup {
    return this.fb.group({
      startTime : '',
      endTime : '',
      breakTime : ''
    });
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  addItem(): void {
    this.items = this.profileForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  removeItem(index) {
    this.items.removeAt(index);
      }
}
