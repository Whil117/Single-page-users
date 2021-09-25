import { FC, useEffect, useLayoutEffect, useState } from "react";
import { Myusers } from "../components/Users";
import ThemeContext, { themes } from "../hooks/useContext";
import { Global, css } from "@emotion/react";
import { Users } from "../components/Users";
interface Themes {
  color: string;
  backgroundColor: string;
}

const Home: FC = () => {
  const [theme, setTheme] = useState<Themes>(themes.dark as Themes);
  const [localData, setLocalData] = useState<Users[]>([]);

  const handleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

  useLayoutEffect(() => {
    const theme = JSON.parse(
      localStorage.getItem("theme") || JSON.stringify(themes.dark)
    );
    setTheme(theme);
  }, []);

  const LocalStorag = (type: string, obj: Themes | Users[]) => {
    localStorage.setItem(type, JSON.stringify(obj));
  };
  useEffect(() => {
    LocalStorag("theme", theme);
    // LocalStorag("data", localData);
  }, [theme ]);
  return (
    <ThemeContext.Provider value={{ theme, handleTheme,setLocalData,localData }}>
      <Global
        styles={css`
          body {
            background-color: ${theme.backgroundColor};
          }
        `}
      />
      <Myusers />
    </ThemeContext.Provider>
  );
};

export default Home;
