import { Component } from '@angular/core';
import { People } from '../model/People';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent {
  public people: People[] = [
    new People('Mano', 30),
    new People('Truta', 29),
    new People('Tiu', 31),
  ];
}
