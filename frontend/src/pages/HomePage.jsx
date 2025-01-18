
import CreatePage from '@/utils/CreateTask'
import React from 'react'
import {tasks} from "../assets/items"

import { Box, SimpleGrid } from '@chakra-ui/react';
import TaskCard from '@/utils/TaskCard';

function HomePage() {



  return (
    <Box padding={"20px"} minWidth={"100vw"} minHeight={"100vh"}>
        {/* <CreatePage/> */}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          gap={"1px"}
          width={"full"}
        >
        { tasks.map((task)=>{
          return <TaskCard key={task.id} task={task} />
        })}
        </SimpleGrid>
    </Box>
    
  )
}

export default HomePage
