import React from "react";
import { MdDelete } from "react-icons/md";


const AddFriendBtn = ({sendFriendRequest}) => {
  return (
    <button onClick={sendFriendRequest} className="active:scale-95 cursor-pointer w-full py-2 text-[1.2em] bg-[#eab1a769] flex items-center justify-center gap-3  rounded-2xl font-semibold text-[#286199]">
      <MdDelete /> Remove
    </button>
  );
};

export default AddFriendBtn;
