import { Component, OnInit, Input } from '@angular/core';

type Animal = 'dog' | 'cat';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() Boolean = false;
  @Input() String = '';
  @Input() Number = 12345;
  @Input() animal: Animal = 'dog';

  constructor() {}

  ngOnInit() {
    // expected value
    console.log(this.Boolean);
    console.log(this.String);
    console.log(this.Number);
    // Input = 'cat2' unexpected value
    console.log(this.animal);
  }
}
