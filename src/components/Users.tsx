import { FC, useEffect, useState } from "react";
import { Button, Text, Image ,Flex, Box} from "@chakra-ui/react";
interface Users {
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export const Myusers: FC = () => {
  const [data, setData] = useState<Users[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

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

  const handleNextPage = () => {
      pageNumber >= 2 ? setPageNumber(1) : setPageNumber(pageNumber + 1);
  };
  const handleBackPage = () => {
      pageNumber <= 1 ? setPageNumber(2) : setPageNumber(pageNumber - 1);
  };
  return (
    <div >
      <h1 >Page:{pageNumber} of 2</h1>
      <Button m={2} colorScheme="gray" onClick={handleBackPage}>
        Back
      </Button>
      <Button m={2} colorScheme="blue" onClick={handleNextPage}>
        Next
      </Button>
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
            <Text fontWeight="extrabold">
              {item.first_name} {item.last_name}
            </Text>
            <p>{item.email}</p>
          </Box>
        ))}
      </Flex>
    </div>
  );
};
