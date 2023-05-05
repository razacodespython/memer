import { Flex, Grid, GridItem, Box, Button, Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
//https://imgflip.com/api
//https://api.imgflip.com/get_memes

const Home: NextPage = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    //goes to folder
    const response = await fetch("/api/memes");
    const json = await response.json();
    console.log(json); // 100 memes in this json
    setData(json);
  };
  // fetchData();

  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(7, 1fr)"
        templateColumns="repeat(1, 1fr)"
        gap={4}
        bg="linear-gradient(to bottom, #191970, #2e0854, #4b0082)"
        minHeight="100vh"
      >
        <GridItem colSpan={1} bg="gray.200" m="5" borderRadius="lg">
          <GridItem rowSpan={1} bg="orange" p="5" borderRadius="lg">
            <Flex justifyContent="left" alignItems="center">
              <Box pr="5">
                <Image
                  src="/logo.jpg"
                  alt="logo"
                  width={50}
                  height={50}
                  style={{ borderRadius: "100px" }}
                />
              </Box>
              <Box>
                <h1>Meme Generator</h1>
              </Box>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} bg="white" pt="6">
            <Flex justifyContent="space-between" alignItems="center" p="2">
              <Box w="100%" p="2">
                <Input placeholder="First keyword" />
              </Box>
              <Box w="100%" p="2">
                <Input placeholder="Second keyword" />
              </Box>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1}>
            <Flex justifyContent="center" alignItems="center" p="2">
              <Button onClick={fetchData}>get meme</Button>
            </Flex>
          </GridItem>
          <GridItem rowSpan={3} m="10">
            <Flex
              justifyContent="center"
              alignItems="center"
              position="relative"
              p="2"
            >
              <Image src="/logo.jpg" alt="logo" width={500} height={500} />
              <h1
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                top text
              </h1>
              <h1
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                bottom text
              </h1>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1}>
            <Flex justifyContent="center" alignItems="center" p="2">
              Footer made with love
            </Flex>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
};
export default Home;
