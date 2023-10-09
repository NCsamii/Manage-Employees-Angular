import {environment} from "../../../environments/environment";
const baseUrl =environment.baseUrl;
export const apiUrl = {

  // EMPLOYEES
  employees: `${baseUrl}/employees`,
  create: `${baseUrl}/create`,
  update: `${baseUrl}/update`,
  delete: `${baseUrl}/delete`,
}
