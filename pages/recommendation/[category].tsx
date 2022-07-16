import React from "react";
import { useRouter } from "next/router";
import ContainerComponent from "../../src/components/uiElements/Container/Container";

const RecommendationCategory = (props) => {
  return <ContainerComponent>RecommendationCategory</ContainerComponent>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  return {
    props: {
      data: "hello",
    }, // will be passed to the page component as props
  };
}

export default RecommendationCategory;
