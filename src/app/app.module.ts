import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModuleExampleComponent } from './pages/form-module-example/form-module-example.component';
import { TemplateDrivenFormComponent } from './Forms/template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormModuleExampleComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
