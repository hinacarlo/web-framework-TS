import { User } from "./models/User";

const user = new User({ id: 1, name: "zandra B", age: 0 });

user.on("save", () => {
  console.log(user);
});

user.save();
