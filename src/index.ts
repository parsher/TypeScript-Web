import { User } from "./models/User";

const user = User.buildUser({ name: "new record", age: 0 });

console.log(user.get('name'))
