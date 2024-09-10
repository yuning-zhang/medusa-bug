import { MedusaService } from "@medusajs/utils";
import Employee from "./models/employee";
import Role from "./models/role";

class B2BModuleService extends MedusaService({
  Employee,
  Role,
}) {}

export default B2BModuleService;
