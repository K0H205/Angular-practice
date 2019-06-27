import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { identityRevealedValidator } from './passwordMatch.directive';

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
  passwordForm = this.fb.group({
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
    ],
    confirmPassword: ['', Validators.required]
  });

  passwordError = false;

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

  onSubmit2() {
    const password = this.passwordForm.get('password').value;
    const confirmPassword = this.passwordForm.get('confirmPassword').value;
    if (password !== confirmPassword) {
      this.passwordError = true;
    } else {
      this.passwordError = false;
    }
    console.log(password.value);
    // TODO: Use EventEmitter with form value
    console.warn(this.items);

    this.checkoutForm.reset();
  }
}
