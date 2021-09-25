// import { Image } from "@chakra-ui/image";
import Image from "next/image";
import { FC } from "react";
interface Props {
  data: {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    color: string;
    email: string;
    favorite: Boolean;
  };
  handleCheck: (id: number) => void;
}
const User: FC<Props> = ({ data, handleCheck }) => {
  return (
    <div>
      <img
        style={{
          borderRadius: "150px",
          objectFit: "cover",
          width: "150px",
          height: "150px",
        }}
        src={data.avatar}
        alt={data.first_name}
      />
      <p style={{ color: data.color }}>
        <b>
          {data.first_name} {data.last_name}
        </b>
      </p>
      <p style={{ color: data.color }}>{data.email}</p>
      <button id="follow" style={{border:"none"}} onClick={() => handleCheck(data.id)}>
        {data.favorite ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9643 21.5419L10.9682 21.5443C11.2791 21.7335 11.6361 21.8335 12 21.8335C12.3639 21.8335 12.7209 21.7335 13.0318 21.5443L13.0357 21.5419C17.4556 18.8247 19.9586 16.0792 21.3522 13.6614C22.7492 11.2379 23 9.19839 23 7.95C23 4.65418 20.3037 2 17 2C15.2713 2 13.7957 2.92675 12.8265 3.73008C12.5092 3.99305 12.2314 4.2551 12 4.49019C11.7686 4.2551 11.4908 3.99305 11.1735 3.73008C10.2043 2.92675 8.72865 2 7 2C3.6963 2 1 4.65418 1 7.95C1 9.19839 1.2508 11.2379 2.64775 13.6614C4.04141 16.0792 6.54438 18.8247 10.9643 21.5419Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default User;
