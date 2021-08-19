import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I&apos;m making this by following the Gatsby Tutorial.</p>

        <StaticImage
          alt="Spaghetti with clams, parmigiana and white wine"
          src="../images/italian-food.jpg"
        />
      </Layout>
    </main>
  );
};

export default IndexPage;
