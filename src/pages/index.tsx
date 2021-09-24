import { FC, useEffect, useLayoutEffect, useState } from "react";
import { Myusers } from "../components/Users";
import ThemeContext, { themes } from "../hooks/useContext";
import { Global, css } from "@emotion/react";

interface Themes {
    color: string;
    backgroundColor: string;
}

const Home: FC = () => {
  const [theme, setTheme] = useState<Themes>(themes.dark as Themes);

  const handleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

    useLayoutEffect(() => {
      const theme = JSON.parse(localStorage.getItem("theme") || JSON.stringify(themes.dark)) 
      setTheme(theme);
    }, []);
  
    useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);
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
