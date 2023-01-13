import axios, { AxiosResponse } from 'axios';

interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserData) {} // object to store information from parameter

  // gets a single piece of info about this user
  get(propName: string): number | string {
    return this.data[propName];
  }

  // changes info about this user (name, age)
  set(update: UserData): void {
    /* Object.assign(this.data, update); */
    this.data = { ...this.data, ...update };
  }

  // registers an event handler with this object so other parts of the app
  // know when something changes
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  // triggers an event to tell other parts of the app that something has changed
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;

    handlers.forEach((cb) => {
      cb();
    });
  }

  // fetches some data from the server about a particular user
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  // saves some data about this user to the server
  /* save(): Promise */
}
