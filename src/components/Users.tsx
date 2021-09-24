import {
  FC,
  Reducer,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Button, Text, Image, Flex, Box } from "@chakra-ui/react";
import ThemeContext from "../hooks/useContext";
import Theme from "./Theme";
import CButton from "../components/Button";

interface Users {
  id?: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}
interface IAction {
  type: string;
  payload: Users;
}

const reducer = (state: Users[], action: IAction): Users[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const Myusers: FC = () => {
  const [data, setData] = useState<Users[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { theme } = useContext(ThemeContext);
  const [userFav, dispatch] = useReducer<Reducer<Users[], IAction>>(
    reducer,
    data
  );

  const useFetch = async (value: number) => {
    const url = `https://reqres.in/api/users?page=${value}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    setData(data);
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

  console.log(userFav);
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
        {data.map((item) => (
          <Box m="2" key={item.first_name}>
            <Image
              boxSize="150px"
              borderRadius="5px"
              objectFit="cover"
              src={item.avatar}
              alt={item.first_name}
            />
            <p style={{ color: theme.color }}>
              <b>
                {item.first_name} {item.last_name}
              </b>
            </p>
            <p style={{ color: theme.color }}>{item.email}</p>
            {userFav.map((user) => {
              console.log("userFav", user);
            })}
          </Box>
        ))}
      </Flex>
    </main>
  );
};
/*
              if (user.id === item.id) {
                return (
                  <button
                    onClick={() => dispatch({ type: "delete", payload: item })}
                  >
                    UnFavorite
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={() => dispatch({ type: "add", payload: item })}
                  >
                    Favorite
                  </button>
                );
              } 

              */
