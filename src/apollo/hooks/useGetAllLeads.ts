import { gql, useQuery } from "@apollo/client";
import { lead } from "../interfaces/index";
interface LeadsQueryResponse {
  getAllLeads: {
    leads: lead[];
    totalItemCount: number;
  };
}
export const GET_ALl_LEADS = gql`
  query getAllStudioLeads($params: LeadFilterInput!, $page: Int, $limit: Int) {
    getAllLeads(params: $params, page: $page, limit: $limit) {
      leads {
        _id
        userId
        leadId
        firstName
        lastName
        countryCode
      }
    }
  }
`;

export const useGetAllLeads = (options) =>
  useQuery<LeadsQueryResponse>(GET_ALl_LEADS, options);
