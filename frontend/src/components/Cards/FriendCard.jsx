import React, { useContext } from 'react'
import { FaUser } from "react-icons/fa";
import AddFriendBtn from '../Buttons/AddFriendBtn';
import { UserDataContext } from '../../../contextApi/DataContaxt';
import axios from 'axios';

const FriendCard = ({cardData, imgData}) => {

    const {userData} = useContext(UserDataContext);
    const token = localStorage.getItem('accessToken');

    const sendFriendRequest = async (event)=>{

        const requestData = {
            senderId: userData._id,
            receiverId: cardData._id,
            status: "pending"
        }

        try {
           const response = await  axios.post('http://localhost:9000/api/sendFriendRequest', 
            requestData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
           );

           console.log("Res: ", response);
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className='w-[15em] overflow-hidden bg-[#ffff] flex flex-col items-center justify-center rounded-3xl border border-[#9391918d]'>
        <div className='w-full'>
            {!imgData && 
            <div className='w-full h-50 bg-[#d2d2d2] text-[10em] text-[#707070]  flex items-end justify-center'>
                <FaUser />
            </div>
            }
        </div>
        <div className='text-[1.3em] mt-3 mb-10 font-semibold text-[#484848]'>{cardData.firstName + " " + cardData.serName}</div>
        <div className='w-full mb-5 px-5'>
            <AddFriendBtn sendFriendRequest={sendFriendRequest} />
        </div>
    </div>
  )
}

export default FriendCard