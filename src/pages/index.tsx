import React, { useEffect, useState } from "react";
import { Myusers } from "../components/Myusers";
// import { ProjectsDataFake } from "../components/UserData";

interface Users {
  name: string;
  id: number;
}

const Home: React.FC = () => {
  const [data, setstate] = useState<Users[]>([]);

  return (
    <>
      <div>
      <Myusers />
      </div>
    </>
  );
};
//porque typar un map?
export default Home;
