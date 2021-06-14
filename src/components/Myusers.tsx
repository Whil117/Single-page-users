import React, { useEffect, useState } from "react";

interface Users {
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export const Myusers: React.FC = () => {
  const [data, setData] = useState<Users[]>([]);
  const [count, setcount] = useState(1);

  const useFetch = async (value: number) => {
    const url = `https://reqres.in/api/users?page=${value}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    setData(data);
    localStorage.setItem("page", JSON.stringify(value));
  };

  useEffect(() => {
    useFetch(count);
  }, [count]);
  
  useEffect(() => {
    const pageNumber = localStorage.getItem("page");
    setcount(Number(pageNumber));
  }, []);

  const handleNextPage = () => {
    setcount(count + 1);
    if (count >= 2) {
      setcount(1);
    }
  };
  const handleBackPage = () => {
    setcount(count - 1);
    if (count <= 1) {
      setcount(2);
    }
  };
  return (
    <div>
      <h1>Page:{count} of 2</h1>
      <button onClick={handleBackPage}>Back</button>
      <button onClick={handleNextPage}>Next</button>
      {data.map((item) => (
        <div key={item.first_name}>
          <h2>
            {item.first_name} {item.last_name}
          </h2>
          <p>{item.email}</p>
          <img src={item.avatar} alt={item.first_name} />
        </div>
      ))}
    </div>
  );
};
