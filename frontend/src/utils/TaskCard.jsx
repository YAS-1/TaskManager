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
                    <Box p={4} minH={"250px"}  minW={"150px"}>
                        <Text fontSize={"xl"} fontFamily={"cursive"}>{task.taskDescription}</Text>
                    </Box >

                    {task.category==="Academic" && 
                            <Box minH={"100px"} padding={"20px"} bgColor={"red.600"}>
                            <Text fontWeight={"bold"} fontSize={"2xl"} md={4} fontFamily={"cursive"}> #{task.taskName} </Text>
                            <Box>
                                <Text fontSize={"lg"} fontFamily={"cursive"}>Category: {task.category}</Text>
                                <Text fontSize={"lg"} fontFamily={"cursive"}>Complete: {task.completed}</Text>
                                <Text fontSize={"lg"} fontFamily={"cursive"}>Due date: {task.dueDate}</Text>
                            </Box>
                            </Box>
                    }
                    {task.category==="Personal" && 
                            <Box minH={"100px"} padding={"20px"} bgColor={"blue.600"}>
                            <Text fontWeight={"bold"} fontSize={"2xl"} md={4} fontFamily={"cursive"}> #{task.taskName} </Text>
                            <Box>
                                <Text fontSize={"lg"} fontFamily={"cursive"}>Category: {task.category}</Text>
                                <Text fontSize={"lg"} fontFamily={"cursive"}>Complete: {task.completed}</Text>
                                <Text fontSize={"lg"} fontFamily={"cursive"}>Due date: {task.dueDate}</Text>
                            </Box>
                            </Box>
                    }
                </Box>
                </Container>
    );
}

export default TaskCard;
