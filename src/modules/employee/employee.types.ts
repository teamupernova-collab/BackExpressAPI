export interface CreateEmployeeDTO {
  userID: string;
  companyID: string;
  rolID: string;
  isActive: boolean;
}

export interface UpdateEmployeeDTO {
  companyID: string;
  rolID: string;
  isActive: boolean;
}
