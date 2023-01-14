import axios, { AxiosResponse } from 'axios';
import { UserData } from './User';

export class Sync {
  constructor(public rootUrl: string) {}
  // fetches some data from the server about a particular user
  fetch(): void {
    axios
      .get(`${this.rootUrl}/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  // saves some data about this user to the server
  save(data: UserData): void {
    const id = data.id;

    if (id) {
      axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      axios.post(this.rootUrl, data);
    }
  }
}
