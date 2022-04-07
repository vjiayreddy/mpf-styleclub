import { Fragment } from "react";
import { NextPage } from "next";
import { useGetAllLeads } from "../src/apollo/queries/useGetAllLeads";

const HomePage: NextPage = (props: any) => {
  const { loading, data, error, networkStatus, called, refetch, variables } =
    useGetAllLeads({
      //fetchPolicy: "network-only",
      variables: { params: {}, page: 1, limit: 100 },
    });

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error.message);
    if (error.networkError) {
      console.log("Server went offline...");
    } else if (error.graphQLErrors) {
      console.log("Somwthing went to wrong please try again");
    }
    return <div>Error</div>;
  }

  return (
    <Fragment>
      <button>Refetch</button>
    </Fragment>
  );
};

export default HomePage;
