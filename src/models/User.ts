import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserData> = new Sync<UserData>(
    'http://localhost:3000/users'
  );

  constructor(private data: UserData) {} // object to store information from parameter

  // gets a single piece of info about this user
  get(propName: string): number | string {
    return this.data[propName];
  }

  // changes info about this user (name, age)
  set(update: UserData): void {
    console.log(update);
    /* Object.assign(this.data, update); */
    this.data = { ...this.data, ...update };
  }
}
