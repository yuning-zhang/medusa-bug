import { model } from "@medusajs/utils";
import Role from "./role";

const Employee = model.define("employee", {
  id: model.id().primaryKey(),
  name: model.text().nullable(),
  first_name: model.text().nullable(),
  last_name: model.text().nullable(),
  email: model.text().unique(),
  roles: model.manyToMany(() => Role),
});

export default Employee;
