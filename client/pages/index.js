import React from "react";
import buildClient from "../api/build-client";

const Landing = ({ currentUser }) => {
  console.log(currentUser);

  return <div>Hello world</div>;
};

Landing.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default Landing;
