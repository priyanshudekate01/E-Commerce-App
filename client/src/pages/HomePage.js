import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const { auth, setAuth } = useAuth();
  return (
    <Layout>
      <h1>Home page</h1>
      <pre>{JSON.stringify(auth, null)}</pre>
    </Layout>
  );
};

export default HomePage;
