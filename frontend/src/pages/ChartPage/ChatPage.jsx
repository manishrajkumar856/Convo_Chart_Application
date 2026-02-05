// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { socket } from "../../socket/socket";
// import { io } from "socket.io-client";

// const ChatPage = () => {
//   const location = useLocation();
//   const { friendId } = location.state || {};

//   socket.connect();
//   return (
//     <div className="w-full h-screen bg-[#f3f3f3]">
//       This is my XCHat Id: {friendId}
//     </div>
//   );
// };

// export default ChatPage;

import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { socket } from "../../socket/socket";
import { UserDataContext } from "../../../contextApi/DataContaxt";
import axios from "axios";

const ChatPage = () => {
  const location = useLocation();
  const { friendId } = location.state || {};
  const { userData } = useContext(UserDataContext);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // connect socket
    socket.connect();

    // Join your own room
    socket.emit("join", userData._id);

    // Listen for incoming messages
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("welcome", (msg) => {
      console.log("Emited Msg: ", msg);
    });
  }, [friendId]);

  const handle_change_field = (e) => {
    setMessage(e.target.value);
  };

  const handle_submit_message = (e) => {
    const create_message = {
      sender: userData._id,
      receiver: friendId,
      message: message.trim(),
    };

    socket.emit("mess", create_message);
    setMessage("");
  };

  const getAllMessage = async () => {
    try {
      const response = await axios.post(
        "https://convo-chart-application-1.onrender.com/api/chat/getAllChat",
        {
          yourId: userData._id,
          friendId: friendId,
        },
      );

      console.log(response);

      setMessages(response.data.chats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMessage()
  });

  return (
    <div className="w-full h-screen flex flex-col bg-[#f3f3f3]">
      {/* Header */}
      <div className="p-4 bg-white shadow font-semibold">
        Chat with: {friendId}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((data) => (
          <div key={data._id || Math.random()}>
            {data.sender === userData._id ? (
              <div className="text-right text-blue-600 px-10 bg-[#6db4de9f]">
                You: {data.message}
              </div>
            ) : (
              <div className="text-left text-gray-700">
                Friend: {data.message}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 bg-white flex gap-2">
        <input
          type="text"
          value={message}
          onChange={handle_change_field}
          placeholder="Type a message..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={handle_submit_message}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
