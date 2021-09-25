import { createContext, Dispatch, SetStateAction } from "react";
import { Users } from "../components/Users";

export const themes = {
  dark: {
    color: "white",
    backgroundColor: "#393e41",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  },
};
interface Props {
  theme: {
    color: string;
    backgroundColor: string;
  };
  handleTheme: () => void;
  setLocalData: Dispatch<SetStateAction<Users[]>>
  localData:Users[]
}

const ThemeContext = createContext<Props>({} as Props);

export default ThemeContext;
