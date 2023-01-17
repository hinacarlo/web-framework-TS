import { UserData } from "./User";

export class Attributes<T> {
  constructor(private data: T) {} // object to store information from parameter

  // gets a single piece of info about this user
  // because keys in JS are just string, we can type string in TS.
  // get<K extends keyof T>(propName: K): T[K] -- this line can be
  // get(propName: T): string | number
  get<K extends keyof T>(propName: K): T[K] {
    return this.data[propName];
  }

  // changes info about this user (name, age)
  set(update: T): void {
    console.log(update);
    /* Object.assign(this.data, update); */
    this.data = { ...this.data, ...update };
  }
}
