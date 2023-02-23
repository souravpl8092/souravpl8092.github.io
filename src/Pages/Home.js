import { Divider } from "@chakra-ui/react";
import React from "react";
import About from "../Pages/About";
import Project from "./Project";
import Github from "../Components/Github";
import Skills from "./Skills";
import Contact from "./Contact";
import Profile from "./Profile";

function Home() {
  return (
    <>
      <Profile />
      <Divider />
      <Divider />
      <hr />
      <About />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <Divider />
      <hr />
      <Project />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <Divider />
      <hr />
      <br />
      <Skills />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <Divider />
      <hr />
      <Github />
      <br />
      <br />
      <Divider />
      <Divider />
      <hr />
      <Contact />
    </>
  );
}

export default Home;
