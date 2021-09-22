import { FC } from "react";
import { Myusers } from "../components/Users";
import { ChakraProvider } from "@chakra-ui/react";
import MyContext , {propsTheme} from "../hooks/useContext";

const Home: FC = () => {
  return (
    <ChakraProvider>
      <MyContext.Provider value={propsTheme}>
        <Myusers />
      </MyContext.Provider>
    </ChakraProvider>
  );
};

export default Home;
