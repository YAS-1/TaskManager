
import React, { useState } from "react";
import {
	Button,
	Box,
	Text,
	Flex,
	VStack,
	Heading,
	Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AppName from "@/utils/appName";

const LoginPage = () => {

    const [user, setUser] = useState({
        username:"",
        password:""
    });

    const handleChange = (e) =>{
        const { name, value} = e.target 
        setUser((prev) => ({...prev, [name]: value}));
    }

    const handleLogin = () => {
        // API call to login
        console.log(user);
    }


	return (
			<Box minW={"100vw"} minH={"100vh"} alignItems={"center"}>
				<AppName/>
				<Flex align={"center"} justify={"center"}>
					<Box
						rounded={"2xl"}
						border={"solid"}
						borderWidth={"1px"}
						p={8}
						marginTop={20}
						width={["300px", "500px"]}
						shadow={"xl"}
						shadowColor={"gray.900"}
                        bgColor={"gray.800"}>
						<VStack gapY={5}>
							<Heading
								size={"2xl"}
								textStyle={"monospaced"}
								fontWeight={"bold"}>
								Login
							</Heading>
							<Box>
								<VStack gapY={4}>
									<Input
										type={"text"}
										placeholder={"Username"}
										width={["250px", "450px"]}
                                        height={["35px","50px"]}
										border={"solid"}
										borderWidth={"1.5px"}
										rounded={"lg"}
										fontSize={"lg"}
										color={"whiteAlpha.700"}
                                        name={"username"}
                                        value={user.username}
                                        onChange={handleChange}
										required
									/>
									<Input
										type={"password"}
										placeholder={"Password"}
										width={["250px", "450px"]}
                                        height={["35px","50px"]}
										border={"solid"}
										borderWidth={"1.5px"}
										rounded={"lg"}
										fontSize={"lg"}
                                        color={"whiteAlpha.700"}
                                        name={"password"}
                                        value={user.password}
                                        onChange={handleChange}
										required
									/>
									<Button
										bgColor={"#1E90FF"}
										rounded={"full"}
										width={["250px", "450px"]}
                                        height={["35px","50px"]}
										_hover={{ bgColor: "#4169E1" }}
										transition={"ease-in-out"}
										transitionDuration={"slowest"}
										border={"none"}
                                        onClick={handleLogin}>
										Login
									</Button>
								</VStack>
							</Box>
							<Box>
								<VStack gapY={4}>
									<Text fontSize={"lg"} color={"whiteAlpha.700"}>
										Don't have an Account?
									</Text>
									<Link to='/signUp'>
										<Button
											rounded={"full"}
											width={["250px", "450px"]}
											color={"whiteAlpha.700"}
											bgColor={"#1E90FF"}
											_hover={{ bgColor: "#4169E1" }}
											transition={"ease-in-out"}
											transitionDuration={"slowest"}
											border={"none"}>
											Sign up
										</Button>
									</Link>
								</VStack>
							</Box>
						</VStack>
					</Box>
				</Flex>
			</Box>
  )
}

export default LoginPage