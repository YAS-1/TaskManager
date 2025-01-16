import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
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

const SignUpPage = () => {

    const [ user, setUser] = useState({
        username:"",
        fullname:"",
        email:"",
        password:"",
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));

    }

    const handleSignUp = () => {
        console.log(user);
    }

	return (
		<Flex align={"center"} justify={"center"}>
			<Box minW={"100vw"} minH={"100vh"} alignItems={"center"} pt={10}>
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
								Signup
							</Heading>
							<Box>
								<VStack gapY={4}>
									<Input
										type={"text"}
										placeholder={"Username"}
										width={["250px", "450px"]}
										border={"solid"}
										borderWidth={"1.5px"}
										rounded={"lg"}
										height={["35px","50px"]}
										fontSize={"lg"}
                                        color={"whiteAlpha.700"}
                                        name={"username"}
                                        value={user.username}
                                        onChange={handleChange}
										required
									/>
									<Input
										type={"text"}
										placeholder={"fullname"}
										width={["250px", "450px"]}
										border={"solid"}
										borderWidth={"1.5px"}
										rounded={"lg"}
										height={["35px","50px"]}
										fontSize={"lg"}
                                        color={"whiteAlpha.700"}
                                        name={"fullname"}
                                        value={user.fullname}
                                        onChange={handleChange}
										required
									/>
									<Input
										type={"email"}
										placeholder={"email"}
										width={["250px", "450px"]}
										border={"solid"}
										borderWidth={"1.5px"}
										rounded={"lg"}
										height={["35px","50px"]}
										fontSize={"lg"}
                                        color={"whiteAlpha.700"}
                                        name={"email"}
                                        value={user.email}
                                        onChange={handleChange}
										required
									/>
									<Input
										type={"password"}
										placeholder={"Password"}
										width={["250px", "450px"]}
										border={"solid"}
										borderWidth={"1.5px"}
										rounded={"lg"}
										height={["35px","50px"]}
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
                                        onClick={handleSignUp}>
										Sign up
									</Button>
								</VStack>
							</Box>
							<Box>
								<VStack gapY={4}>
									<Text fontSize={["md", "lg"]} color={"whiteAlpha.700"}>
										Already have an account?
									</Text>
									<Link to='/'>
										<Button
											rounded={"full"}
                                            width={["250px", "450px"]}
                                            height={["35px","50px"]}
											color={"whiteAlpha.700"}
											bgColor={"#1E90FF"}
											_hover={{ bgColor: "#4169E1" }}
											transition={"ease-in-out"}
											transitionDuration={"slowest"}
											border={"none"}>
											Login
										</Button>
									</Link>
								</VStack>
							</Box>
						</VStack>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};

export default SignUpPage;
