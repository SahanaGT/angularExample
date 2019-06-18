import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModuleExampleComponent } from './form-module-example.component';

describe('FormModuleEcampleComponent', () => {
  let component: FormModuleExampleComponent;
  let fixture: ComponentFixture<FormModuleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModuleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModuleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
