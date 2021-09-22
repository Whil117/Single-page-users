import { createContext } from "react";

export const propsTheme = {
    theme:"dark"
}
interface Props {
    theme:string
}

const MyContext = createContext<Props>({} as Props)

export default MyContext
