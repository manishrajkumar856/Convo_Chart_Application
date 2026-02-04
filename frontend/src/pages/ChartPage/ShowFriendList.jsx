import React, { useContext } from "react";
import { UserDataContext } from "../../../contextApi/DataContaxt";
import AcFriendCard from "../../components/Cards/AcFriendCard";

const ShowFriendList = () => {
  const { userData, getDataUsingId } = useContext(UserDataContext);
  const token = localStorage.getItem("accessToken");

  return (
    <div>
      <div className="relative   z-10 w-full bg-white px-10 py-8 rounded-2xl">
        <h2 className="w-full text-2xl font-semibold mb-3 text-center text-[#4a4a4a]">
          Connect with your Friends
        </h2>

        <div className="w-full mt-5 columns-4 content-center justify-items-center">
          {userData &&
            userData.friendList.map((id, idx) => {
              return (
                <div key={idx}>
                  <AcFriendCard id={id} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ShowFriendList;
