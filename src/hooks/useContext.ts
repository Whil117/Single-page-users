import { createContext } from "react";

export const themes = {
  dark: {
    color: "white",
    backgroundColor: "Black",
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
}

const ThemeContext = createContext<Props>({} as Props);

export default ThemeContext;
