import React from "react";
import { useParams } from "react-router-dom";
const User = ({ data }) => {
  const { id } = useParams();
  const userData = data[id - 1];
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-[25px] bg-[white] p-4 flex gap-2 w-[400px] h-[100px] items-center">
        <div className="">
          <img
            src={userData.avatar}
            alt=""
            className="h-[60px] w-[60px] rounded-full"
          />
        </div>
        <div className="">
          <h1 className="text-[#1C2B62]">
            {userData.first_name + " " + userData.last_name}
          </h1>
          <p className="">{userData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
