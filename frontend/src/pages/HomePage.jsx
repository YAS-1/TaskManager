import CreatePage from "@/utils/CreateTask";
import React from "react";


import { tasks } from "../assets/items";

import {
	Box,
	SimpleGrid,
	VStack,
	HStack,
	Flex,
	Button,
} from "@chakra-ui/react";
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
import TaskCard from "@/utils/TaskCard";
import AppName from "@/utils/appName";

function HomePage() {
	return (
		<Box
			paddingX={"20px"}
			paddingY={"10px"}
			scrollBehavior={"smooth"}
			minWidth={"100vw"}
			minHeight={"100vh"}>
			<VStack gap={10}>
				<AppName />
				<Box>
					<Flex align={"center"} justify={"center"}>
            <Button color={"white"} border={"solid"} borderWidth={"1px"} shadow={"lg"} bgColor={"#1E90FF"} transition={"all 0.s"} _hover={{bgColor: "#4169E1",transform: "translateY(-5px)",shadow: "xl",}}>
									Add new task
						</Button>
					</Flex>
				</Box>
				<HStack gap={5}>
					{tasks.length === 0 && <CreatePage />}
					<SimpleGrid
						columns={{
							base: 1,
							md: 2,
							lg: 3,
						}}
						gap={"1px"}
						width={"full"}>
						{tasks.map((task) => {
							return <TaskCard key={task.id} task={task} />;
						})}
					</SimpleGrid>
				</HStack>
			</VStack>
		</Box>
	);
}

export default HomePage;
