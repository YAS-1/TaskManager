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
  Input,
  Textarea
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

  // const [tasks, setTasks] = useState([tasks]);

  // const handleChangeTask = (e) => {
  //   const { name, value } = e.target;

  //   setTasks((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  const CreateTask = (e) => {
    e.preventDefault();
    console.log(tasks);
  };

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
                <DialogRoot width={["250px", "500px"]}>
                  <DialogTrigger asChild>
                    <Button color={"white"} border={"solid"} borderWidth={"1px"} shadow={"lg"} bgColor={"#1E90FF"}  transition={"ease-in-out"} transitionDuration={"slowest"} _hover={{bgColor: "#4169E1",transform: "translateY(-5px)",shadow: "xl",}}>
									      Add new task
						        </Button>
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
                          value=""
                          // onChange={handleChangeTask}
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
                          value=""
                          // onChange={handleChangeTask}
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
