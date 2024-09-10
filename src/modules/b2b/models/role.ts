import { model } from "@medusajs/utils";
import Employee from "./employee";

const Role = model.define("role", {
  id: model.id().primaryKey(),
  name: model.text().unique(),
  employees: model.manyToMany(() => Employee),
});

export default Role;
