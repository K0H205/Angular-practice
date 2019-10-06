import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './store/counter.reducer';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ChildComponent } from './child/child.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { ReactiveForm2Component } from './form2/reactive-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    ReactiveFormComponent,
    ReactiveForm1Component,
    ReactiveForm2Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
