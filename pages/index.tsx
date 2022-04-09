import { Fragment } from "react";
import { NextPage } from "next";

const HomePage: NextPage = (props: any) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <Fragment>
      <div>
        <main>Main Component</main>
      </div>
    </Fragment>
  );
};

export default HomePage;
