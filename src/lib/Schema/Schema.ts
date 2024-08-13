import mongoose from "mongoose";
import dbConnect from "../DB_Connection/dbConnection";
dbConnect()

const UserSchemaData = new mongoose.Schema({
  NanoId:  { type:String, ref: 'NanoId', required: false },
  name: { type:String, ref: 'name', required: false },
  email: { type:String, ref: 'email', required: false },
  password: { type:String, ref: 'password', required: false },
  userImg:{ type:String, ref: 'userImg', required: false },
  recentDate:{type:String, ref: 'userImg', required: false},
  isVerify: {
  type: Boolean,
  default: false,
  },
  isAdmin: {
  type: Boolean,
  default: false,
  },
  token: String,
  tokenVerified: Date,
  forgotPassword: String,
  forgotPasswordVerified: Date,
  dateField: {
          type: Date,
          default: Date.now,
          required: [false, "fill the data"],
          },
})



export const UserSchema = mongoose.models.users || mongoose.model("users",UserSchemaData)







const productSchema = new mongoose.Schema({
  productName: {
  type: String,
  required:false
  },
  productsLink: {
    type: String,
    required:false
  },
  productImageLink: {
    type: String,
    required:false
  },

  price: {
    type: String,
    required:false
  },
  rank: {
    type: String,
    required:false
  },
  category: {
    type: String,
    trim: true
  },
  stock: {
    type: String,
    required:false
  },
  brand: {
    type: String,
    required:false
  },
  importFrom: {
    type: String,
    required:false
  },
  mandeIn: {
    type: String,
    required:false
  },
  productDescriptions:{
    type: String,
    required:false
  },

  likes:[],
  
  comments: [],

  recentDate:{
    type: String,
    required:false
  },

  dateField: {
    type: Date,
    default: Date.now
  }
});


export const ProductsSchema = mongoose.models.products || mongoose.model('products', productSchema);



// const commentSchema = new mongoose.Schema({
//   user: {
//     type: String,
//     required: true
//   },
//   comment: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });