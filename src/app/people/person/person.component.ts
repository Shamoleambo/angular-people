import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent {
  @Input() name: string;
  @Input() age: number;
  @Input() hobbies: string[];
  @Input() profession: string
}
