export interface CreateCompanyDTO {
  legalName: string;
  description: string;
  rfc: string;
  status: boolean;
}

export interface UpdateCompanyDTO {
  legalName: string;
  description: string;
  rfc: string;
  status: boolean;
}
