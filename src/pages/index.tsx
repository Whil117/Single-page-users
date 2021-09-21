import { FC } from "react";
import { Myusers } from "../components/Users";
import { ChakraProvider } from "@chakra-ui/react"

const Home: FC = () =>{
    return (
        <ChakraProvider>
             <Myusers />
        </ChakraProvider>
    )
};

export default Home;
