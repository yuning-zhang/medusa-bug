import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/medusa";
import B2BModuleService from "../../../modules/b2b/service";
import { B2B_MODULE } from "../../../modules/b2b";

type RequestBody = {};

export const POST = async (
  req: AuthenticatedMedusaRequest<RequestBody>,
  res: MedusaResponse
) => {
  const b2bModuleService: B2BModuleService = req.scope.resolve(B2B_MODULE);

  const role = await b2bModuleService.createRoles({
    name: "test_role",
  });

  const employee = await b2bModuleService.createEmployees({
    name: "Hello World",
    first_name: "Hello",
    last_name: "World",
    email: "test@test.com",
    roles: [role.id],
  });

  const fullEmployee = await b2bModuleService.retrieveEmployee(employee.id, {
    relations: ["roles"],
  });

  res.json({ role, employee, fullEmployee });
};
