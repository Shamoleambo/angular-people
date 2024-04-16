import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: ['.profession-text {margin-top: 16px;}'],
})
export class PersonComponent {
  @Input() name: string;
  @Input() age: number;
  @Input() hobbies: string[];
  @Input() profession: string;
}
