import { Box, Text, Container, HStack, Button } from "@chakra-ui/react";
import { MdUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import React from "react";

const TaskCard = ({ task }) => {
	return (
		<Container maxW='container.xl' py={12}>
			<Box
				shadow={"lg"}
				rounded={"lg"}
				overflow={"hidden"}
				transition={"all 0.3s"}
				bg={"blackAlpha.800"}
				_hover={{transform: "translateY(-5px)", shadow: "xl",}}
				>
				<Box p={4} minH={"250px"} minW={"100px"}>
					<Text fontSize={"xl"} fontFamily={"cursive"}>
						{task.taskDescription}
					</Text>
				</Box>

				{task.category === "Academic" && (
					<Box minH={"100px"} padding={"20px"} bgColor={"red.400"}>
						<HStack gap={"25px"}>
							<Box minW={"250px"}>
								<Text
									fontWeight={"bold"}
									fontSize={"lg"}
									md={4}
									fontFamily={"cursive"}>
									{" "}
									#{task.taskName}{" "}
								</Text>
							</Box>
							<Box minW={"100px"}>
								<HStack>
									<Button bgColor={"white"} width={"10px"} height={"30px"}>
										<MdUpdate />
									</Button>
									<Button bgColor={"white"} width={"10px"} height={"30px"}>
										<MdDelete />
									</Button>
								</HStack>
							</Box>
						</HStack>
						<Box>
							<Text fontSize={"md"} fontFamily={"cursive"}>
								Category: {task.category}
							</Text>
							<Text fontSize={"md"} fontFamily={"cursive"}>
								Complete: {task.completed}
							</Text>
							<Text fontSize={"md"} fontFamily={"cursive"}>
								Due date: {task.dueDate}
							</Text>
						</Box>
					</Box>
				)}
				{task.category === "Personal" && (
					<Box minH={"100px"} padding={"20px"} bgColor={"blue.400"}>
						<HStack gap={"25px"}>
							<Box minW={"250px"}>
								<Text
									fontWeight={"bold"}
									fontSize={"lg"}
									md={4}
									fontFamily={"cursive"}>
									{" "}
									#{task.taskName}{" "}
								</Text>
							</Box>
							<Box minW={"100px"}>
								<HStack>
									<Button bgColor={"white"} width={"10px"} height={"30px"}>
										<MdUpdate />
									</Button>
									<Button bgColor={"white"} width={"10px"} height={"30px"}>
										<MdDelete />
									</Button>
								</HStack>
							</Box>
						</HStack>
						<Box>
							<Text fontSize={"md"} fontFamily={"cursive"}>
								Category: {task.category}
							</Text>
							<Text fontSize={"md"} fontFamily={"cursive"}>
								Complete: {task.completed}
							</Text>
							<Text fontSize={"md"} fontFamily={"cursive"}>
								Due date: {task.dueDate}
							</Text>
						</Box>
					</Box>
				)}
			</Box>
		</Container>
	);
};

export default TaskCard;
