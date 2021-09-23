//This class will hold a response of the REST API

import { Issues } from "./issues";

export class Project {
  id: number;
  name: String;
  companyName: String;
  key: String;
  issuesDto: Array<Issues>;

}
