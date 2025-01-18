import {
	Box,
	Flex,
	Text,
	HStack,
	VStack,
	Button,
	Input,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
	DialogActionTrigger,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

function CreatePage() {
	const [task, setTask] = useState([
		{
			taskName: "",
			taskDescription: "",
		},
	]);

	const handleChangeTask = (e) => {
		const { name, value } = e.target;

		setTask((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const CreateTask = (e) => {
		e.preventDefault();
		console.log(task);
	};

	return (
			<Box padding={"100px"} minHeight={"95vh"}>
				<Box>
					<Flex align={"center"} justify={"center"}>
						<HStack gap={3}>
							<Text fontWeight={"bold"} fontSize={["sm", "xl"]}>
								No Tasks to display.
							</Text>
							<DialogRoot width={["250px", "500px"]}>
								<DialogTrigger asChild>
									<Text
										fontWeight={"bold"}
										fontSize={["sm", "xl"]}
										color={"#00BFFF"}
										_hover={{
											color: "#1E90FF",
											cursor: "pointer",
											textDecoration: "underline",
										}}>
										Create Task📝
									</Text>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle fontWeight={"bold"} fontSize={"2xl"}>
											Create Task
										</DialogTitle>
									</DialogHeader>
									<DialogBody>
										<VStack gap={4} align={"left"}>
											<Input
												type={"text"}
												placeholder={"Task name"}
												width={["250px", "450px"]}
												border={"solid"}
												borderWidth={"1.5px"}
												rounded={"lg"}
												height={"50px"}
												fontSize={"lg"}
												color={"whiteAlpha.700"}
												name='taskName'
												value={task.taskName}
												onChange={handleChangeTask}
												required
											/>
											<Textarea
												type={"text"}
												placeholder={"Task description"}
												width={["250px", "450px"]}
												border={"solid"}
												borderWidth={"1.5px"}
												rounded={"lg"}
												height={"200px"}
												fontSize={"lg"}
												color={"whiteAlpha.700"}
												name='taskDescription'
												value={task.taskDescription}
												onChange={handleChangeTask}
												required
											/>
										</VStack>
									</DialogBody>
									<DialogFooter>
										<DialogActionTrigger asChild>
											<Button variant='outline'>Cancel</Button>
										</DialogActionTrigger>
										<Button onClick={CreateTask} color={"white"}>Save</Button>
									</DialogFooter>
									<DialogCloseTrigger />
								</DialogContent>
							</DialogRoot>
						</HStack>
					</Flex>
				</Box>
			</Box>
	);
}

export default CreatePage;
