import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html'
})
export class ReactiveForm1Component {
  readonly animalsOption: Option[] = [
    { label: 'イヌ', value: 'Dog' },
    { label: 'ネコ', value: 'Cat' },
    { label: 'ネズミ', value: 'Rabbit' }
  ];
  ngForm: FormGroup = this.fb.group({
    animals: this.fb.array(this.animalsOption.map(() => this.fb.control(false)))
  });
  showValue: string[] = [''];

  get animals(): FormArray {
    return this.ngForm.get('animals') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.ngForm);
    this.showValue = this.convertFormValue(this.animals, this.animalsOption);
  }

  private convertFormValue(formArray: FormArray, option: Option[]): string[] {
    const values: boolean[] = formArray.value;
    return values
      .map((val, index) => {
        return val ? option[index].value : undefined;
      })
      .filter(v => v);
  }
}
