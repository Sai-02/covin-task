import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
const Footer = ({ data }) => {
  const { id } = useParams();
  const [index, setIndex] = useState(id);
  return (
    <footer className="py-6 flex justify-center">
      <ul className="flex flex-row gap-2  ">
        {data.map((user) => {
          return (
            <li
              className={`bg-[white] w-[2rem] rounded-[2px] p-2 text-center ${
                index == user.id ? "bg-[#1C2B62] text-[white]" : ""
              }`}
              key={user.id}
            >
              <Link to={`/user/${user.id}`} onClick={() => setIndex(user.id)}>
                {user.id}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
