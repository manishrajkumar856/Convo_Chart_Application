import { User } from "../modals/user_model.js";

export const getAllFriends = async (req, res) => {

//   const userId = req.params.userId;

//   if (!userId) {
//     return res.status(404).json({
//       success: false,
//       message: "User id is messing!",
//     });
//   }

//   try {
//     const getUser = await User.findById(userId);

//     if (!getUser) {
//       return res.status(404).json({
//         success: false,
//         message: "User not exist",
//       });
//     }

//     const getAllFriends = [];
//     async Promise.all(
//         getUser.friendList.map( async (id) =>{
//         const data = await User.findById(id);
//         if(data){
//             getAllFriends.unshift(data);
//             console.log(data);
//         }
//     })
//     )
    

    
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error! :" + error,
//     });
//   }
};
