import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserData> = new Sync<UserData>(
    "http://localhost:3000/users"
  );
}
