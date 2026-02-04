import React, { useContext } from 'react'
import { UserDataContext } from '../../contextApi/DataContaxt'

const ProfileBox = () => {

    const {userData} = useContext(UserDataContext);
  return (
    <div className='w-10 h-10 text-[#ffffff] font-semibold bg-[#be1d1dbc] rounded-full border border-[#a6a1a1b2] flex items-center justify-center text-2xl'>
        <div>
            {userData && userData.firstName.split("")[0]}
        </div>
    </div>
  )
}

export default ProfileBox