import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray
} from "@angular/forms";
import { identityRevealedValidator } from "./passwordMatch.directive";

interface Item {
  name: string;
  price: string;
}
@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"]
})
export class ReactiveFormComponent implements OnInit {
  musicGenre = [
    { id: 1, genre: "Pop" },
    { id: 2, genre: "Rock" },
    { id: 3, genre: "Techno" },
    { id: 4, genre: "Hiphop" }
  ];
  formControls = this.musicGenre.map(val => new FormControl());
  ngForm = this.fb.group({
    name: [""],
    price: [""],
    musicPreferences: new FormArray(this.formControls)
  });

  get musicPreferences() {
    const values: string[] = this.ngForm.get("musicPreferences").value;
    return values
      .map((value, index) => {
        return value ? this.musicGenre[index].genre : null;
      })
      .filter(Boolean);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.ngForm.valueChanges.subscribe(val =>
      console.log(this.musicPreferences)
    );
  }

  onSubmit() {
    console.log(this.musicPreferences);
    console.log(this.ngForm);
  }
}
