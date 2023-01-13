import axios, { AxiosResponse } from 'axios';

interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserData) { } // object to store information from parameter

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

  // fetches some data from the server about a particular user
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  // saves some data about this user to the server
  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
