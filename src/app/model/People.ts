export class People {
  private name: string;
  private age: number;
  private hobbies: string[];
  private profession: string;

  constructor(
    name: string,
    age: number,
    hobbies: string[],
    profession: string
  ) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.profession = profession;
  }
}
