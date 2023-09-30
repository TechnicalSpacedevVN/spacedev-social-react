interface CreateOrgResponse extends Response<{}> {}

interface CreateOrgDto {
  name: string;
  description: string;
}

type UpdateOrgDto = Partial<
  CreateOrgDto & {
    logo: string;
    domain: string;
  }
>;

type GetOgRes = Response<IOrganization[]>;
