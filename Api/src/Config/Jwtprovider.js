import jwt from 'jsonwebtoken'

const SECRET_KEY='ADNFALNLAFDI9020932EKLW2NO123H12HE3';

export const generateToken=async(userId)=>{

    const token =jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})


    return token ;
}

export const getUserIdFromToken =async(token)=>{

    const decodedToken= jwt.verify(token,SECRET_KEY);
    

    return decodedToken.userId;

}