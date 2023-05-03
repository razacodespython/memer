import { Flex, Grid, GridItem, Box, Spacer, Button } from '@chakra-ui/react'

export default function Basic() {
  return (
    <>
<Grid
  h='200px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}
>
  {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}
 <GridItem colSpan={4} bg='gray.200'>
 <Flex>
  <Box p='4' m='5' bg='red.400'>
    <Button>Header Logo</Button>
  </Box>
  <Spacer />
  <Box p='4' m='5' bg='green.400'>
    <Button>Box 2 - Connect Wallet</Button>
  </Box>
</Flex>
  </GridItem> 
 <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>
          </>
  )
}
