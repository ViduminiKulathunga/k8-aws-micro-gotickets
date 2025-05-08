import React from "react";
import axios from "axios";

const Landing = ({ currentUser }) => {
  console.log(currentUser);

  return <div>Hello world</div>;
};

Landing.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    const { data } = await axios
      .get(
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
        {
          headers: req.headers,
        }
      )
      .catch((err) => console.log(err.message));

    return data;
  } else {
    const { data } = await axios
      .get("/api/users/currentuser")
      .catch((err) => console.log(err.message));

    return data;
  }
};

export default Landing;
