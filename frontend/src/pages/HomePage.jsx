import { Box, Container, Flex, Text, HStack, VStack, Button, Input, Textarea } from "@chakra-ui/react";
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


function HomePage() {
    const [ taskName, settaskName] = useState("");
    const [ taskDescription, settaskDescription] = useState("");

    const handleChangeTaskName = (e) => {
        settaskName(e.target.value);
    }

    const handleChangeTaskDescription = (e) => {
        settaskDescription(e.target.value);
    }

    const CreateTask = () => {
        const Task = {"taskName":taskName,
            "taskDescription":taskDescription};
        console.log(Task);
    }

	return (
		<Box padding={"10px"} minWidth={"100vw"} minHeight={"100vh"}>
			<Box padding={"100px"} minHeight={"95vh"}>
				<Box>
					<Flex align={"center"} justify={"center"}>
						<HStack gap={3}>
							<Text fontWeight={"bold"} fontSize={["sm", "xl"]}>
								No Tasks to display.
							</Text>
                            <DialogRoot width={["250px", "500px"]}>
                                <DialogTrigger asChild>
                                    <Text fontWeight={"bold"} fontSize={["sm", "xl"]} color={"#00BFFF"} _hover={{color:"#1E90FF", cursor:"pointer", textDecoration:"underline"}}>Create Task📝</Text>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle fontWeight={"bold"} fontSize={"2xl"}>Create Task</DialogTitle>
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
                                        name="taskName"
                                        value={taskName}
                                        onChange={handleChangeTaskName}
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
                                        name="taskDescription"
                                        value={taskDescription}
                                        onChange={handleChangeTaskDescription}
										required
                                        />
                                        </VStack>
                                    </DialogBody>
                                    <DialogFooter>
                                        <DialogActionTrigger asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </DialogActionTrigger>
                                        <Button onClick={CreateTask}>Save</Button>
                                    </DialogFooter>
                                    <DialogCloseTrigger/>
                                </DialogContent>
                            </DialogRoot>
						</HStack>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}

export default HomePage;
