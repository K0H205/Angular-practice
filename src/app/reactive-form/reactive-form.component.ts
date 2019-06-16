import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

interface Item {
  name: string;
  price: string;
}
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  items = [];
  checkoutForm: FormGroup;
  name = new FormControl('hoge');

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      name: '',
      price: ''
    });
  }

  onSubmit(formData: Item) {
    this.items.push(formData);
    // TODO: Use EventEmitter with form value
    console.warn(this.items);

    this.checkoutForm.reset();
  }
}
