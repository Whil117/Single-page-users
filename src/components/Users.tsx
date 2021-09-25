import {
  FC,
  Reducer,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Flex } from "@chakra-ui/react";
import ThemeContext from "../hooks/useContext";
import Theme from "./Theme";
import CButton from "../components/Button";
import User from "./User";

export interface Users {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  favorite: boolean;
}
type IAction = {
  type: string;
  payload: any;
};

const reducer = (state: Users[], action: IAction): Users[] => {
  switch (action.type) {
    case "update":
      return [...action.payload];
    case "check":
      return state.map((user) =>
        user.id === action.payload
          ? { ...user, favorite: !user.favorite }
          : user
      );
    default:
      return state;
  }
};
// const localData =  () => {
//   if (typeof window !== "undefined") {
//     return JSON.parse(localStorage.getItem("data") || "[]")
//   }
// }

export const Myusers: FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { theme } = useContext(ThemeContext);
  const [user, dispatch] = useReducer<Reducer<Users[], IAction>>(reducer, []);

  const useFetch = async (value: number) => {
    const url = `https://reqres.in/api/users?page=${value}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const newData = data.map((user: Users) => {
      return {
        ...user,
        favorite: false,
      };
    });
    dispatch({ type: "update", payload: newData });

    localStorage.setItem("pageUser", JSON.stringify(value));
  };
  useEffect(() => {
    useFetch(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    const pageNumber = localStorage.getItem("pageUser") || 1;
    setPageNumber(Number(pageNumber));
  }, []);

  const handleNextPage = () =>
    pageNumber >= 2 ? setPageNumber(1) : setPageNumber(pageNumber + 1);
  const handleBackPage = () =>
    pageNumber <= 1 ? setPageNumber(2) : setPageNumber(pageNumber - 1);

  const handleCheck = (id: number) => {
    dispatch({ type: "check", payload: id });
  };

  return (
    <main>
      <h1 style={{ color: theme.color }}>Page:{pageNumber} of 2</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <div>
          <Theme />
        </div>
        <div
          style={{
            width: "160px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <CButton
            title="Back"
            size="md"
            color="secondary"
            disabledShadow
            handle={handleBackPage}
          />
          <CButton
            title="Next"
            size="md"
            color="primary"
            disabledShadow
            handle={handleNextPage}
          />
        </div>
      </div>
      <Flex justifyContent="space-around" flexWrap="wrap">
        {user.map((item) => (
          <User
            key={item.id}
            data={{ ...item, color: theme.color }}
            handleCheck={handleCheck}
          />
        ))}
      </Flex>
    </main>
  );
};
