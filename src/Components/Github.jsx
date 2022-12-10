import { Box, Flex, Grid, Heading, Img } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <Box>
      <Heading textAlign={"center"} mt={40} style={{ color: "#C8DA47" }}>
        Git Statistics
      </Heading>
      <br />
      <br />
      <Grid w={"80%"} m="40px auto" justifyContent={"center"}>
        <Img
          className="git"
          src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=souravpl8092&theme=solarized_dark"
        />

        <GitHubCalendar
          username="souravpl8092"
          blockSize={20}
          blockMargin={5}
          color={"#20FF32"}
        />
        <Flex wrap="wrap">
          <Img
            className="git"
            src="https://github-readme-stats.vercel.app/api?username=souravpl8092&show_icons=true&theme=radical"
          />
          <Img
            className="git"
            src="https://github-readme-streak-stats.herokuapp.com/?user=souravpl8092&theme=radical"
          />
        </Flex>
        <Img
          className="git"
          src="https://github-profile-trophy.vercel.app/?username=souravpl8092&theme=radical"
        />
        <Img
          className="git"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=souravpl8092&layout=compact&theme=radical"
        />
      </Grid>
    </Box>
  );
}

export default Github;
