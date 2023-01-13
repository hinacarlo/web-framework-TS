interface UserData {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserData) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserData): void {
    Object.assign(this.data, update);
  }
}
