import { Flex, Grid, GridItem, Box, Button, Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
//https://imgflip.com/api
//https://api.imgflip.com/get_memes
//check
const Home: NextPage = () => {
  const [data, setData] = useState(null);
  const [random, setRandom] = useState(0);
  const [firstKeyword, setFirstKeyword] = useState("");
  const [secondKeyword, setSecondKeyword] = useState("");
  const fontUrl =
    "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
  const fetchData = async () => {
    //goes to folder
    const response = await fetch("/api/memes");
    const json = await response.json();
    console.log(json); // 100 memes in this json
    setData(json);
    const randomNumber = Math.floor(Math.random() * 100);
    setRandom(randomNumber);
  };
  // fetchData();

  function changeFirstKw(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstKeyword(event.target.value);
  }
  function changeSecondKw(event: React.ChangeEvent<HTMLInputElement>) {
    setSecondKeyword(event.target.value);
  }

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
                <Input
                  placeholder="First keyword"
                  value={firstKeyword}
                  onChange={changeFirstKw}
                />
              </Box>
              <Box w="100%" p="2">
                <Input
                  placeholder="Second keyword"
                  value={secondKeyword}
                  onChange={changeSecondKw}
                />
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
              {/* //"/logo.jpg" */}
              <Image
                src={data?.data?.memes[random].url}
                alt="logo"
                width={500}
                height={50}
              />
              <h1
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: 4000,
                  fontStyle: "bold",
                  color: "white",
                  fontSize: "65px",
                  WebkitTextStroke: "2px black",
                }}
              >
                {firstKeyword}
              </h1>
              <h1
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: 4000,
                  fontStyle: "bold",
                  color: "white",
                  fontSize: "65px",
                  WebkitTextStroke: "2px black",
                }}
                // clamp(1rem, 5vw, 2.5rem)
              >
                {secondKeyword}
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
