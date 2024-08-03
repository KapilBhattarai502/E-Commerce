import { User } from "../models/user.model.js";

import bcrypt from "bcrypt";
// import Jwtprovider from "../Config/Jwtprovider.js";
import { getUserIdFromToken } from "../Config/Jwtprovider.js";

export const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("user already exists :", email);
    }
    password = await bcrypt.hash(password, 8);
    const user = await User.create({ firstName, lastName, email, password });
    return user;
  } catch (error) {
    throw new Error(error.message);
    
  }
};

export const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    // .populate("address");
   
    if (!user) {
      throw new Error("No user with such Id :", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByEmail = async (email) => {
    try {
      const user = await User.findOne({email});
      if (!user) {
        throw new Error("No user with given mail :", email);
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };



export const getUserProfileByToken = async (token) => {
  const userId =await getUserIdFromToken(token);
 
  try {
    const user = await findUserById(userId);

    if (!user) {
      throw new Error("No user with the given token :", token);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllUsersFromDB = async () => {
  try {
    const users = await User.find();

    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
