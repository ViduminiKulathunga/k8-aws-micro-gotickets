import React from "react";
import buildClient from "../api/build-client";

const Landing = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are Welcome</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

Landing.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client
    .get("/api/users/currentuser")
    .catch((err) => console.log(err));

  return data;
};

export default Landing;
