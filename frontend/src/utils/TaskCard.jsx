import { Box, Text, Container } from '@chakra-ui/react';
import React from 'react';

const TaskCard = ({task}) => {
    return (
        <Container maxW="container.xl" py={12}>
            <Box
                shadow={"lg"}
                rounded={"lg"}
                overflow={"hidden"}
                transition={"all 0.3s"}
                bg={"blackAlpha.800"}
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}>
                    <Box p={4} borderWidth={"1px"} borderBottom={"solid"} minH={"250px"}  minW={"150px"}bgGradient="to-br" gradientFrom={"purple.400"}gradientVia={"green.400"}gradientTo={"orange.400"}>
                        <Text fontSize={"xl"} fontFamily={"cursive"}>{task.taskDescription}</Text>
                    </Box >
                    <Box minH={"100px"} padding={"20px"}>
                    <Text fontWeight={"bold"} fontSize={"2xl"} md={4} fontFamily={"cursive"}> #{task.taskName} </Text>
                    <Box>
                        <Text fontSize={"lg"} fontFamily={"cursive"}>{task.category}</Text>
                        <Text fontSize={"lg"} fontFamily={"cursive"}>{task.completed}</Text>
                        <Text fontSize={"lg"} fontFamily={"cursive"}>{task.dueDate}</Text>
                    </Box>
                    </Box>
                </Box>
                </Container>
    );
}

export default TaskCard;
