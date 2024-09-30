
// import mongoose from 'mongoose'

// const userSchema=new mongoose.Schema({
//     firstName:{
//         type:String,
//         required:true,
//     },
//     lastName:{
//         type:String,
//         required:true,

//     },
//     password:{
//         type:String,
//         required:true,


//     },
//     email:{
//         type:String,
//         required:true,

//     },
//     role:{
//         type:String,
//         required:true,
//         default:"CUSTOMER"

//     },
//     mobile:{
//         type:String,
    
//     },
//     address:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"addresses"

//     }
//     ],
//     paymentInformation:[
//         {
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"payment_information"
//         }
//     ],
//     ratings:[
//         {
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"ratings"
//         }
//     ],
//     reviews:[
//         {
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"ratings"

//         }
//     ],
//     createdAt:{
//         type:Date,
//         default:Date.now()
//     }

// })

// export const User=mongoose.model("users",userSchema);

import mongoose from 'mongoose';

// Define the Address schema
const AddressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    // user field is no longer needed since the address will be embedded directly in the user document
});

// Define the User schema with embedded addresses
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "CUSTOMER",
    },
    mobile: {
        type: String,
    },
    address: [AddressSchema], // Embedding the Address schema
    paymentInformation: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "payment_information",
        },
    ],
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ratings",
        },
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ratings",
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const User = mongoose.model("users", userSchema);
export const Address = mongoose.model("addresses", AddressSchema);

