import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html'
})
export class ReactiveForm2Component {
  readonly animalsOption: Option[] = [
    { label: 'イヌ', value: 'Dog' },
    { label: 'ネコ', value: 'Cat' },
    { label: 'ネズミ', value: 'Rabbit' }
  ];
  ngForm: FormGroup = this.fb.group({
    animals: this.fb.array([])
  });
  showValue: string[] = [''];

  get animals(): FormArray {
    return this.ngForm.get('animals') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.ngForm);
    this.showValue = this.animals.value;
  }

  onChange(value: string) {
    const array = this.animals.getRawValue();
    array.includes(value)
      ? this.animals.removeAt(array.indexOf(value))
      : this.animals.push(this.fb.control(value));
  }
}
