import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import FriendCard from "../../components/Cards/FriendCard";
import Slider1 from "../../components/Slider/Slider1";
import axios from "axios";

const HomePage = () => {
  const token = localStorage.getItem("accessToken");
  const [getLoading, setLoading] = useState(false);
  const [getLoading2, setLoading2] = useState(true);
  const [getFriendSugg, serFriendSugg] = useState(null);

  const friendSuggestion = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/getFriendSugg",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data);
      serFriendSugg(response.data.friendSuggestionList);
      setLoading2(false);
    } catch (error) {}
  }

  useEffect(()=>{
    friendSuggestion();
  }, []);

  if (getLoading) {
    return (
      <div className="w-full h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center items-start h-screen px-10 md:px-20 lg:px-30 py-5">
      <Slider1>
        {getLoading2 && <Loader />}

        {!getLoading2 && getFriendSugg &&
        getFriendSugg.map((itm, idx)=> <FriendCard key={idx} cardData={itm} imgData={null} />)
        }
      </Slider1>
    </div>
  );
};

export default HomePage;
