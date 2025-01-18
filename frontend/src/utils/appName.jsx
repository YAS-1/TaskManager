import { Box, Text, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function AppName() {
  return (
    <Box minW={"100vw"} minH={"80px"}>
        <Flex align={"center"} justify={"center"}>
            <Box padding={"15px"}>
                <Heading as={"h1"} color={"blue.500"} fontFamily={"cursive"}>Task Manager</Heading>
            </Box>
        </Flex>
    </Box>
  )
}

export default AppName