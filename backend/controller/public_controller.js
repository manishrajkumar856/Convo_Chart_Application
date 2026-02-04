import { RequestModel } from "../modals/friendRequestModel.js";
import { User } from "../modals/user_model.js";

export const handleHomePage = async (req, res) => {
  console.log("Id:", req.id);

  if (!req.id) {
    return res.status(404).json({
      success: false,
      message: "Id is messing!",
    });
  }

  try {
    const user = await User.findById(req.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not exist!",
      });
    }

    return res.status(202).json({
      success: true,
      message: "Request Successfull!",
      userData: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

export const getFriendSuggestion = async (req, res) => {
  try {
    const getFriendsList = await User.find();

    return res.status(202).json({
      success: true,
      message: "Friend Suggestion List SUccessfully!",
      friendSuggestionList: getFriendsList,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can't get Freinds!",
    });
  }
};

export const sendFriendRequest = async (req, res) => {
  const { senderId, receiverId, status } = req.body;

  // await User.updateMany({}, {$set: {following: [], follower: [], userNotifications: []}})

  if (!senderId || !receiverId || !status) {
    return res.status(404).json({
      success: false,
      message: "Request Failed!, one of the field is messing",
    });
  }

  try {
    console.log(senderId, receiverId, status);
    const requestData = {
      senderId: senderId,
      receiverId: receiverId,
      requestStatus: "pending",
    };

    const newRequest = new RequestModel(requestData);
    const user = await User.findById(receiverId);

    console.log(user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not exist",
      });
    }

    // ✅ Proper duplicate check
    const alreadyExists = user.userNotifications.some(
      (n) =>
        n.type == "Friend_Request" &&
        n.data.senderId == requestData.senderId &&
        n.data.receiverId == requestData.receiverId &&
        n.data.requestStatus == requestData.requestStatus,
    );

    // Check Already Exist or not!
    if (alreadyExists) {
      console.log("Already Exist!");
    } else {
      user.userNotifications.unshift({
        type: "Friend_Request",
        data: requestData,
      });

      await user.save();
    }

    await newRequest.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!, : " + error,
    });
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(404).json({
      success: false,
      message: "Messing Id",
    });
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not exist!",
      });
    }

    return res.status(202).json({
      success: true,
      message: "User find successfully!",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error: " + error,
    });
  }
};

// Request User Request
export const rejectUserRequest = async (req, res) => {
  const senderId = req.params.id;
  const userId = req.body.userId;

  if (!senderId && !userId) {
    return res.status(404).json({
      success: false,
      message: "Messing sender id or user id",
    });
  }

  try {
    const userData = await User.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not exist!",
      });
    }

    console.log("Hi",userData.userNotifications);

    userData.userNotifications = userData.userNotifications.filter(itm => {
      return itm.data.senderId !== senderId;
    })

    await userData.save();

    return res.status(202).json({
      success: true,
      message: "Request Rejected!",
    })

  } catch (error) {
    if(!senderId && !userId){
    return res.status(500).json({
      success: false,
      message: "Internal Server Error! :"+error,
    })
  }
  }
};


// Accepted User Request
export const acceptUserRequest = async (req, res)=>{

  const senderId = req.body.senderId;
  const receiverId = req.body.receiverId;

  console.log(req.body);

  if (!senderId && !receiverId) {
    return res.status(404).json({
      success: false,
      message: "Messing sender id or user id",
    });
  }


  try {
    const receiverData = await User.findById(receiverId);
    const senderData = await User.findById(senderId);

    console.log("Receiver:",receiverData);
    console.log("Sender:",senderData);

    if (!receiverData && !senderData) {
      return res.status(404).json({
        success: false,
        message: "User not exist!",
      });
    }

  

    receiverData.userNotifications = receiverData.userNotifications.filter(itm => {
      return itm.data.senderId !== senderId;
    })

    //Follower & Following
    receiverData.follower.unshift(senderId);
    receiverData.friendList.unshift(senderId);

    senderData.following.unshift(receiverId);
    senderData.friendList.unshift(receiverId);

    
    await receiverData.save();
    await senderData.save();
    

    return res.status(202).json({
      success: true,
      message: "Request Rejected!",
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error! :"+error,
    })
  }

}