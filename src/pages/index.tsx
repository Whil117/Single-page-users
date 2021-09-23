import { FC, useState } from "react";
import { Myusers } from "../components/Users";
import { ChakraProvider } from "@chakra-ui/react";
import ThemeContext, { themes } from "../hooks/useContext";
import { Global, css } from "@emotion/react";

const Home: FC = () => {
  const [theme, setTheme] = useState(themes.dark);

  const handleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  return (
      <ThemeContext.Provider value={{ theme, handleTheme }}>
        <Global  styles={css`
          body{
            background-color: ${theme.backgroundColor};
          }
        `}/>
        <Myusers />
      </ThemeContext.Provider>
  );
};

export default Home;
